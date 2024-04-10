import React, { useEffect, useRef } from "react";
import Plotly from "chart.js/auto";

const Heatmap = ({ days }) => {
  const plotRef = useRef(null);

  useEffect(() => {
    if (days) {
      drawHeatmap();
    }
  }, [days]);

  const drawHeatmap = () => {
    if (plotRef.current) {
      const xLabels = Object.keys(days);
      const yLabels = Object.keys(days[xLabels[0]]);
      const zValues = xLabels.map((xLabel) => {
        return yLabels.map((yLabel) => days[xLabel][yLabel] || 0);
      });

      const trace = {
        x: xLabels,
        y: yLabels,
        z: zValues,
        type: "heatmap",
        colorscale: "viridis",
      };

      const layout = {
        xaxis: { title: "Happiness" },
        yaxis: { title: "Healthy" },
        margin: { t: 50 },
      };

      Plotly.newPlot(plotRef.current, [trace], layout);
    }
  };

  return <div ref={plotRef}></div>;
};

export default Heatmap;