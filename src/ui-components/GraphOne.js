import { Paper } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const GraphOne = ({ days }) => {
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
                label: "Happiness",
                data: sortedDays.map((day) => day.Happy),
                borderColor: "rgb(75, 192, 192)",
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
                  text: "Happiness",
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
      <h1 className="heading">
        <b>Graphs</b>
      </h1>
      <div className="data">
        <canvas ref={canvasRef}></canvas>
      </div>
    </Paper>
  );
};

export default GraphOne;
