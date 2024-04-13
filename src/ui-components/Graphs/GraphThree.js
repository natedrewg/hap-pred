import { Paper } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const GraphThree = ({ days }) => {
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (days.length > 0) {
      if (chartInstanceRef.current) {
        // If a chart instance exists, destroy it before creating a new one
        chartInstanceRef.current.destroy();
      }
      drawLineGraph();
    }
  });

  const drawLineGraph = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        const sortedDays = [...days].sort((a, b) => a.id - b.id);
        chartInstanceRef.current = new Chart(ctx, {
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

  return (
    <Paper className="container">
      <h2 className="heading">
        <b>Happiness & Health to Each Day</b>
      </h2>
      <div className="data">
        <canvas ref={canvasRef}></canvas>
      </div>
    </Paper>
  );
};

export default GraphThree;
