import { listDays } from "../graphql/queries";
import config from "../amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import Modal from "../ui-components/Modal/Modal";

Amplify.configure(config);
const client = generateClient();

export const Home = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetchDays();
  }, []);

  const fetchDays = async () => {
    try {
      const result = await client.graphql({ query: listDays });
      const allDays = result.data.listDays.items;
      console.log("List of Days", allDays);
      setDays(allDays);
    } catch (error) {
      console.log("error on fetching days", error);
    }
  };

  return (
    <div className="bg-ivory">
      <body className="cards padding">
        <div className="daysList">
          {days.map((day) => {
            return (
              <Paper key={day.id} variant="outlined" elevation={2}>
                <div className="dayCard">
                  <b>
                    <div className="dayId">
                      <p>Day:</p>
                      {day.id}
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

                  <Modal state={day} />
                </div>
              </Paper>
            );
          })}
        </div>
      </body>
    </div>
  );
};
