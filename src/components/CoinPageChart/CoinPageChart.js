import React from "react";
import { Line } from "react-chartjs-2";
import { formatDate } from "../../Utils/formatDate";
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

const CoinPageChart = props => {
  const data = {
    labels: props.coinHistory.prices.map(price => formatDate(price[0])),
    datasets: [
      {
        data: props.coinHistory.prices.map(price => price[1]),
        fill: true,
        borderColor: "#404040",
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
        tension: 0.6,
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
          display: false,
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
        ticks: { display: false, maxTicksLimit: 7 },
      },
    },
  };
  return <Line data={data} options={options} height={75} />;
};
export default CoinPageChart;
