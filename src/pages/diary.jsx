import React, { useState, useEffect } from "react";
import { Paper, TextField } from "@mui/material";
import { listDays } from "../graphql/queries";
import config from "../amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import Modal from "../ui-components/Modal/Modal";

Amplify.configure(config);
const client = generateClient();

export const Diary = () => {
  const [days, setDays] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchDays();
  }, []);

  const fetchDays = async () => {
    try {
      const result = await client.graphql({ query: listDays });
      const allDays = result.data.listDays.items;

      const sortedAllDays = allDays.sort((a, b) => a.id - b.id);
      console.log("List of Days", sortedAllDays);
      setDays(sortedAllDays);
    } catch (error) {
      console.log("error on fetching days", error);
    }
  };

  const handleSearch = () => {
    const results = days.filter((day) =>
      day.id.toString().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <body className="padding">
      <div className="bg-sage">
        <div className="search-bar">
          <Paper className="p-3">
            <TextField
              id="outlined-basic"
              label="Search Day"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <button
              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded pl-5"
              onClick={handleSearch}
            >
              Search
            </button>
          </Paper>
        </div>
        <div className="spacerSmall"></div>
        <div className="daysList bg-orange-50">
          {(searchTerm ? searchResults : days).map((day) => (
            <Paper
              key={day.id}
              variant="outlined"
              elevation={2}
              className="bg-orange-50"
            >
              <div className="dayCard">
                <b>
                  <div className="dayId">
                    <p>Day: {day.id}</p>
                  </div>
                </b>

                <div className="dayHappy">
                  <p>Happy:</p>
                  {day.Happy}
                </div>

                <div className="daySleep">
                  <p>Sleep:</p>
                  {day.Sleep}
                </div>

                <div className="dayHealthy">
                  <p>Healthy:</p>
                  {day.Healthy}
                </div>

                <div className="dayMeals">
                  <p>Meals:</p>
                  {day.Meals}
                </div>

                <Modal days={day} />
              </div>
            </Paper>
          ))}
        </div>
      </div>
    </body>
  );
};
