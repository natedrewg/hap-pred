import { Paper } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const GraphFour = ({ days }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (days.length > 0) {
      drawLineGraph();
    }
  }, [days]);

  const drawLineGraph = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        const sortedDays = [...days].sort((a, b) => a.id - b.id);
        const labels = sortedDays.map((day) => day.id);
        const data = sortedDays.map((day) => day.Sleep);

        new Chart(ctx, {
          type: "line",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Sleep",
                data: data,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
                fill: false,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Sleep per Day",
                },
              },
              x: {
                title: {
                  display: true,
                  text: "Days",
                },
              },
            },
          },
        });
      }
    }
  };


  return (
    <Paper className="container">
      <h2 className="heading">
        <b>Sleep per Day</b>
      </h2>
      <div className="data">
        <canvas ref={canvasRef}></canvas>
      </div>
    </Paper>
  );
};

export default GraphFive;
