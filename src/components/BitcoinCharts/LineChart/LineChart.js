import React from "react";
import { formatDate } from "../../../Utils/formatDate";
import { formatCurrency } from "@coingecko/cryptoformat";
import { getCurrentDate } from "../../../Utils/getCurrentDate";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getBitcoinData } from "../../../store/home/actions";
import {
  Button,
  ChartContainer,
  DescriptionContainer,
  H1,
  H2,
  IntervalContainer,
} from "./LineChart.styles";
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

const LineChart = () => {
  const dispatch = useDispatch();
  const bitcoinData = useSelector(state => state.coinList.bitcoinData);
  const interval = useSelector(state => state.coinList.interval);
  const currency = useSelector(state => state.app.currency);
  const prices = bitcoinData.prices.map(price => price[1]);

  const data = {
    labels: bitcoinData.prices.map(price => formatDate(price[0])),
    datasets: [
      {
        data: prices,
        fill: {
          target: "origin",
          above:
            prices[prices.length - 1] > prices[0]
              ? "rgb(0, 255, 95, 10%)"
              : "rgb(254, 16, 64, 10%)",
        },
        borderColor:
          prices[prices.length - 1] > prices[0] ? "#00FC2A" : "#FE1040",
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
        tension: 0.5,
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
          <H2>Price</H2>
          <H1>
            {formatCurrency(
              bitcoinData.prices[bitcoinData.prices.length - 1][1],
              currency
            )}
          </H1>
          <H2>{getCurrentDate()}</H2>
        </div>
        <IntervalContainer>
          <Button
            interval={interval}
            onClick={() => dispatch(getBitcoinData(1))}
            value={1}
          >
            1d
          </Button>
          <Button
            interval={interval}
            onClick={() => dispatch(getBitcoinData(7))}
            value={7}
          >
            1w
          </Button>
          <Button
            interval={interval}
            onClick={() => dispatch(getBitcoinData(31))}
            value={31}
          >
            1m
          </Button>
          <Button
            interval={interval}
            onClick={() => dispatch(getBitcoinData(90))}
            value={90}
          >
            3m
          </Button>
          <Button
            interval={interval}
            onClick={() => dispatch(getBitcoinData(180))}
            value={180}
          >
            6m
          </Button>
          <Button
            interval={interval}
            onClick={() => dispatch(getBitcoinData(365))}
            value={365}
          >
            1y
          </Button>
        </IntervalContainer>
      </DescriptionContainer>
      <ChartContainer>
        <Line data={data} options={options} height={240} width={640} />
      </ChartContainer>
    </>
  );
};
export default LineChart;
