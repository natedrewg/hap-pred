import { listDays } from "../graphql/queries";
import config from "../amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import Modal from "../ui-components/Modal/Modal";

Amplify.configure(config);
const client = generateClient();

export const Diary = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetchDays();
  }, []);

  const fetchDays = async () => {
    try {
      const result = await client.graphql({ query: listDays });
      const allDays = result.data.listDays.items;

      console.log("List of Days", allDays);
      setDays(allDays || []);
    } catch (error) {
      console.log("error on fetching days", error);
    }
  };

  const sortedDays = days.slice().sort((a, b) => {
    return a.id - b.id;
  });

  return (
    <div className="bg-sage">
      <body className="cards padding">
        <div className="spacing"></div>
        <div className="daysList bg-orange-50">
          {sortedDays.map((day) => {
            return (
              <Paper key={day.id} variant="outlined" elevation={2}>
                <div className="dayCard">
                  <div className="spacingSmall"></div>
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
            );
          })}
        </div>
      </body>
    </div>
  );
};
