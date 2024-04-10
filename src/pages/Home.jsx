import { listDays } from "../graphql/queries";
import config from "../amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import GraphOne from "../ui-components/Graphs/GraphOne";
import GraphTwo from "../ui-components/Graphs/GraphTwo";
import GraphThree from "../ui-components/Graphs/GraphThree";
import GraphFour from "../ui-components/Graphs/GraphFour";
import Heatmap from "../ui-components/Graphs/Heatmap";

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
    const total = days.reduce(
      (accumulator, day) => accumulator + day[valueKey],
      0
    );
    const average = total / days.length;
    return average.toFixed(1);
  };

  const calculateTotalTrue = (binaryKey) => {
    let totalTrue = 0;
    days.forEach((day) => {
      if (day[binaryKey]) {
        totalTrue++;
      }
    });
    return totalTrue;
  };

  return (
    <div className="bg-sage">
      <body className="padding">
        <div className="spacing"></div>
        <Paper className="container bg-orange-50">
          <h1 className="heading">
            <b>Introduction</b>
          </h1>
          <div className="data">
            <p>
              This website tracks a senior lacrosse student athlete at Eastern
              University named Nathan Gilbert. Below you will be able to see
              insights about what he did everyday. The daily form tab is to add
              to the database. The diary tab is to show a summary of what
              everyday was like, as well as showing the entirety of the day with
              a description through a modal.{" "}
            </p>
          </div>
        </Paper>
        <div className="spacer"></div>
        <Paper className="container bg-orange-50">
          <h1 className="heading">
            <b>Visualizations</b>
          </h1>
          <div className="data">
            <h2>Averages: </h2>
            <p>Number of Days: {countDays()}</p>
            <p>Average Happiness: {calculateAverage("Happy")} / 6</p>
            <p>Average Health: {calculateAverage("Healthy")} / 6</p>
            <p>Average Sleep: {calculateAverage("Sleep")}</p>
            <p>Average Meals: {calculateAverage("Meals")}</p>
            <br />
            <h3>How many days I did certain things:</h3>
            <p>
              Called or hungout with Jess: {calculateTotalTrue("JessCall")} /{" "}
              {countDays()}
            </p>
            <p>
              Called or hungout with friends: {calculateTotalTrue("Hangout")} /{" "}
              {countDays()}
            </p>
            <p>
              Called or hungout with my parents: {calculateTotalTrue("Parents")}{" "}
              / {countDays()}
            </p>
            <p>
              Did homework: {countDays()} / {countDays()}
            </p>
            <p>
              Played videogames: {calculateTotalTrue("VideoGames")} /{" "}
              {countDays()}
            </p>
            <p>
              Took a nap: {calculateTotalTrue("Nap")} / {countDays()}
            </p>
            <p>
              Had practice: {calculateTotalTrue("Practice")} / {countDays()}
            </p>
            <p>
              Had a game: {calculateTotalTrue("Game")} / {countDays()}
            </p>
          </div>
        </Paper>
      </body>
      <div className="spacer"></div>
      <body className="lessPadding">
        <GraphOne days={days} />
        <div className="spacerSmall"></div>
        <GraphTwo days={days} />
        <div className="spacerSmall"></div>
        <GraphThree days={days} />
        <div className="spacerSmall"></div>
        <GraphFour days={days} />
        <div className="spacerSmall"></div>
        <Heatmap days={days} />
      </body>
    </div>
  );
};
