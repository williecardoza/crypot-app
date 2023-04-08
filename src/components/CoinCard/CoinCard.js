import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { formatCurrency } from "@coingecko/cryptoformat";
import { formatNumber } from "../../Utils/formatNumber.js";
import {
  CurrencyContainer,
  CurrencyIcon,
  LineChartContainer,
  PercentageValueContainer,
  PercentageValue,
  StyledArrowIcon,
  StyledLink,
  Span,
  Td,
  Tr,
} from "./CoinCard.styles";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const CoinCard = props => {
  const data = {
    labels: props.coin.sparkline_in_7d.price,
    datasets: [
      {
        label: "",
        data: props.coin.sparkline_in_7d.price,
        fill: false,
        borderColor:
          props.coin.price_change_percentage_7d_in_currency > 0
            ? "#00FC2A"
            : "#FE1040",
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
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
        ticks: { display: false },
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
  const {
    image,
    symbol,
    name,
    current_price,
    price_change_percentage_1h_in_currency,
    price_change_percentage_24h_in_currency,
    price_change_percentage_7d_in_currency,
    total_volume,
    market_cap,
    circulating_supply,
    total_supply,
  } = props.coin;
  return (
    <Tr>
      <Td>{props.index}</Td>
      <Td>
        <CurrencyIcon src={image} />
        <StyledLink to={`/coin/${name}`}>
          {name} <Span>({symbol.toUpperCase()})</Span>
        </StyledLink>
      </Td>
      <Td>{formatCurrency(current_price, props.currency)}</Td>
      <Td>
        <PercentageValueContainer
          value={price_change_percentage_1h_in_currency}
        >
          <StyledArrowIcon value={price_change_percentage_1h_in_currency} />
          <PercentageValue>
            {price_change_percentage_1h_in_currency
              ? price_change_percentage_1h_in_currency.toFixed(2)
              : 0}
            %
          </PercentageValue>
        </PercentageValueContainer>
      </Td>
      <Td>
        {" "}
        <PercentageValueContainer
          value={price_change_percentage_24h_in_currency}
        >
          <StyledArrowIcon value={price_change_percentage_24h_in_currency} />
          <PercentageValue>
            {price_change_percentage_24h_in_currency
              ? price_change_percentage_24h_in_currency.toFixed(2)
              : 0}
            %
          </PercentageValue>
        </PercentageValueContainer>
      </Td>
      <Td>
        <PercentageValueContainer
          value={price_change_percentage_7d_in_currency}
        >
          <StyledArrowIcon value={price_change_percentage_7d_in_currency} />
          <PercentageValue>
            {formatNumber(price_change_percentage_7d_in_currency)}%
          </PercentageValue>
        </PercentageValueContainer>
      </Td>
      <Td>
        <CurrencyContainer>
          <div>{formatNumber(total_volume)}</div>
          <div>{formatNumber(market_cap)}</div>
        </CurrencyContainer>
        <ProgressBar
          completed={(total_volume / market_cap) * 100}
          isLabelVisible={false}
          baseBgColor={"#8A92B2"}
          bgColor={"#474C77"}
          height={"8px"}
          width={"100%"}
        />
      </Td>
      <Td>
        <CurrencyContainer>
          <div>{formatNumber(circulating_supply)}</div>
          <div>{formatNumber(total_supply)}</div>
        </CurrencyContainer>
        <ProgressBar
          completed={(circulating_supply / total_supply) * 100}
          isLabelVisible={false}
          baseBgColor={"#8A92B2"}
          bgColor={"#474C77"}
          height={"8px"}
          width={"100%"}
        />
      </Td>
      <Td>
        <LineChartContainer>
          <Line data={data} options={options} />
        </LineChartContainer>
      </Td>
    </Tr>
  );
};
export default CoinCard;
