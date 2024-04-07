import { listDays } from "../graphql/queries";
import config from "../amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./Home.css";

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
      setDays(allDays || []);
    } catch (error) {
      console.log("error on fetching days", error);
    }
  };

  const countDays = () => {
    return days.length;
  };

  const calculateAverage = (valueKey) => {
    const total = days.reduce((accumulator, day) => accumulator + day[valueKey], 0);
    const average = total / days.length;
    return average.toFixed(1);
  };

  return (
    <div className="bg-sage">
      <body className="padding">
        <Paper className="container">
          <h1 className="heading">Visualizations</h1>
          <div className="data">
            <p>Number of Days: {countDays()}</p>
            <p>Average Happiness: {calculateAverage('Happy')}</p>
            <p>Average Health: {calculateAverage('Healthy')}</p>
            <p>Average Sleep: {calculateAverage('Sleep')}</p>
            <p>Average Meals: {calculateAverage('Meals')}</p>
          </div>
        </Paper>
      </body>
    </div>
  );
};
