import React from "react";
import { Bar } from "react-chartjs-2";
import { formatDate } from "../../../Utils/formatDate";
import { formatNumber } from "../../../Utils/formatNumber";
import { getCurrentDate } from "../../../Utils/getCurrentDate";
import { useSelector } from "react-redux";
import {
  ChartContainer,
  DescriptionContainer,
  H1,
  H2,
} from "../LineChart/LineChart.styles";
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

const BarChart = () => {
  const bitcoinData = useSelector(state => state.coinList.bitcoinData);
  const data = {
    labels: bitcoinData.total_volumes.map(price => formatDate(price[0])),
    datasets: [
      {
        data: bitcoinData.total_volumes.map(price => price[1]),
        fill: true,
        backgroundColor: "#2172E5",
        borderRadius: 3,
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
          maxTicksLimit: 5,
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
  return (
    <>
      <DescriptionContainer>
        <div>
          <H2>Volume 24h</H2>
          <H1>
            {formatNumber(
              bitcoinData.total_volumes[bitcoinData.total_volumes.length - 1][1]
            )}
          </H1>
          <H2>{getCurrentDate()}</H2>
        </div>
      </DescriptionContainer>
      <ChartContainer>
        <Bar data={data} options={options} height={240} width={640} />
      </ChartContainer>
    </>
  );
};
export default BarChart;
