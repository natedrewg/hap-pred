import { Paper } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const GraphHisto = ({ days }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (days.length > 0) {
      drawHistogram();
    }
  }, [days]);

  const drawHistogram = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "histogram",
          data: {
            labels: [],
            datasets: [
              {
                label: "Meals",
                data: days,
                backgroundColor: "rgba(255, 159, 64, 0.5)",
                borderColor: "rgba(255, 159, 64, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Number of Meals",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Frequency",
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
        <b>Meal Histogram</b>
      </h1>
      <div className="data">
        <canvas ref={canvasRef}></canvas>
      </div>
    </Paper>
  );
};

export default GraphHisto;
