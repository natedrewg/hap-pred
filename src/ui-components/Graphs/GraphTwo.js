import { Paper } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const GraphTwo = ({ days }) => {
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
        new Chart(ctx, {
          type: "line",
          data: {
            labels: sortedDays.map((day) => day.id),
            datasets: [
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
                  text: "Days",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Health",
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
        <b>Healthiness to Each Day</b>
      </h2>
      <div className="data">
        <canvas ref={canvasRef}></canvas>
      </div>
    </Paper>
  );
};

export default GraphTwo;
