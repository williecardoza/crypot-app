import React from "react";
import { formatDate } from "../../../Utils/formatDate";
import { Line } from "react-chartjs-2";
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

const LineChart = props => {
  const data = {
    labels: props.data.prices.map(price => formatDate(price[0])),
    datasets: [
      {
        data: props.data.prices,
        fill: {
          target: "origin",
          above:
            props.data.prices.length - (1)[1] >
            props.data.prices.length - (2)[1]
              ? "rgb(0, 255, 95, 10%)"
              : "rgb(254, 16, 64, 10%)",
        },
        borderColor:
          props.data.prices.length - (1)[1] > props.data.prices.length - (2)[1]
            ? "#00FC2A"
            : "#FE1040",
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
        display: false,
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
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
  return <Line data={data} options={options} height={240} width={640} />;
};
export default LineChart;
