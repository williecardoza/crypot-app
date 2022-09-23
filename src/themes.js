import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  main: "#1F2128",
  secondary: "#191B1F",
  third: "#2C2F36",
  color: "#FFFFFF"
};

export const lightTheme = {
  main: "#FCFCFC",
  secondary: "#FFFFFF",
  third: "#FCFCFC",
  color: "#2C2F36"
};

export const GlobalStyles = createGlobalStyle`
body {
   background-color: ${props => props.theme.main};
   color: ${props => props.theme.color};
   font-family: "Poppins", sans-serif;
}
`;
