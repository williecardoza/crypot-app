import React from "react";
import { Bar } from "react-chartjs-2";
import { formatDate } from "../../../Utils/formatDate";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,
  Filler,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
ChartJS.register(
  BarElement,
  LineElement,
  CategoryScale,
  Filler,
  LinearScale,
  PointElement,
  Tooltip
);

const BarChart = props => {
  const data = {
    labels: props.data.total_volumes.map(price => formatDate(price[0])),
    datasets: [
      {
        data: props.data.total_volumes.map(price => price[1]),
        fill: true,
        backgroundColor: "#2172E5",
        barThickness: 6,
        borderWidth: 2,
        borderRadius: 5,
      },
    ],
  };
  const options = {
    onHover: (event, chartElement) => {
      const target = event.native ? event.native.target : event.target;
      target.style.cursor = chartElement[0] ? "pointer" : "default";
    },
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          align: "start",
          display: true,
          maxRotation: 0,
          minRotation: 0,
          maxTicksLimit: 6,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: { display: false },
      },
    },
  };
  return <Bar data={data} options={options} height={240} width={640} />;
};
export default BarChart;
