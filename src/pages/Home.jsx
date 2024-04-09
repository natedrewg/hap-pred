import { listDays } from "../graphql/queries";
import config from "../amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { Paper } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

import "./Home.css";

Amplify.configure(config);
const client = generateClient();

export const Home = () => {
  const [days, setDays] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    fetchDays();
  }, []);

  useEffect(() => {
    if (days.length > 0) {
      drawLineGraph();
    }
  }, [days]);

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

  const calculateTotalTrue = (binaryKey) => {
    let totalTrue = 0;
    days.forEach(day => {
      if (day[binaryKey]) {
        totalTrue++;
      }
    });
    return totalTrue;
  };

  const drawLineGraph = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        const sortedDays = [...days].sort((a, b) => a.id - b.id);
        new Chart(ctx, {
          type: "line",
          data: {
            labels: sortedDays.map(day => day.id),
            datasets: [{
              label: "Happiness",
              data: sortedDays.map(day => day.Happy),
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1
            }]
          },
          options: {
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Day ID'
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'Happiness'
                }
              }
            }
          }
        });
      }
    }
  };

  return (
    <div className="bg-sage">
      <body className="padding">
        <div className="spacing"></div>
      <Paper className="container bg-orange-50">
          <h1 className="heading"><b>Introduction</b></h1>
          <div className="data">
            <p>This website tracks a senior lacrosse student athlete at Eastern University named Nathan Gilbert. Below you will be able to see insights about what he did everyday. The daily form tab is to add to the database. The diary tab is to show a summary of what everyday was like, as well as showing the entirety of the day with a description through a modal. </p>
          
          </div>
        </Paper>
        <div className="spacer"></div>
        <Paper className="container">
          <h1 className="heading"><b>Visualizations</b></h1>
          <div className="data">
            <h2>Averages: </h2>
            <p>Number of Days: {countDays()}</p>
            <p>Average Happiness: {calculateAverage('Happy')} / 6</p>
            <p>Average Health: {calculateAverage('Healthy')} / 6</p>
            <p>Average Sleep: {calculateAverage('Sleep')}</p>
            <p>Average Meals: {calculateAverage('Meals')}</p>
            <br/>
            <h3>How many days I did certain things:</h3>
            <p>Called or hungout with Jess: {calculateTotalTrue('JessCall')} / {countDays()}</p>
            <p>Called or hungout with friends: {calculateTotalTrue('Hangout')} / {countDays()}</p>
            <p>Called or hungout with my parents: {calculateTotalTrue('Parents')} / {countDays()}</p>
            <p>Did homework: {calculateTotalTrue('Homewok')} / {countDays()}</p>
            <p>Played videogames: {calculateTotalTrue('VideoGames')} / {countDays()}</p>
            <p>Took a nap: {calculateTotalTrue('Nap')} / {countDays()}</p>
            <p>Had practice: {calculateTotalTrue('Practice')} / {countDays()}</p>
            <p>Had a game: {calculateTotalTrue('Game')} / {countDays()}</p>
          </div>
        </Paper>
        <Paper className="container">
          <h1 className="heading"><b>Graphs</b></h1>
          <div className="data">
            <canvas ref={canvasRef}></canvas>
          </div>
        </Paper>
      </body>
    </div>
  );
};
