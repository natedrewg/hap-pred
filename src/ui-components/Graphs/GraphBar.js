import { Paper } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const GraphBar = ({ days }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (days.length > 0) {
      drawBarGraph();
    }
  }, [days]);

  const drawBarGraph = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        const labels = days.map((day) => day.id);
        const data = days.map((day) => day.Meals);

        new Chart(ctx, {
          type: "bar",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Meals",
                data: data,
                backgroundColor: "rgba(255, 159, 64, 0.5)",
                borderColor: "rgba(255, 159, 64, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Number of Meals",
                },
              },
              x: {
                title: {
                  display: true,
                  text: "Day ID",
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
        <b>Meals per Day</b>
      </h2>
      <div className="data">
        <canvas ref={canvasRef}></canvas>
      </div>
    </Paper>
  );
};

export default GraphBar;
