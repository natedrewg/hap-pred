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

const Graph = () => {
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

  const drawLineGraph = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        const sortedDays = [...days].sort((a, b) => a.id - b.id);
        new Chart(ctx, {
          type: "line",
          data: {
            labels: sortedDays.map((day) => day.id),
            datasets: [
              {
                label: "Happiness",
                data: sortedDays.map((day) => day.Happy),
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
              {
                label: "Health",
                data: sortedDays.map((day) => day.Healthy),
                borderColor: "rgb(255, 99, 132)",
                tension: 0.1,
              },
            ],
          },
          options: {
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Day ID",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Value",
                },
              },
            },
          },
        });
      }
    }
  };

  return <canvas ref={canvasRef}></canvas>;
};
export default Graph;
