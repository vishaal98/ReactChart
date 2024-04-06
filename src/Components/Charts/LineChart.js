import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart({ data }) {
  return (
    <Line
      options={{
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: "X Axis", // Name of x-axis
            },
            beginAtZero: true, // Optional
          },
          y: {
            title: {
              display: true,
              text: "Y Axis", // Name of y-axis
            },
            beginAtZero: true, // Optional
          },
        },
      }}
      data={data}
    />
  );
}

export default LineChart;
