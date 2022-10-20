import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { HomePage, CoinPage, Portfolio } from "./pages";
import { NavBar } from "./components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

const App = () => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")));
  const [currency, setCurrency] = useState(
    JSON.parse(localStorage.getItem("currency"))
  );

  const handleThemeChange = () => {
    setTheme(!theme);
  };

  const handleSelectedCurrency = currency => {
    setCurrency(currency);
  };

  useEffect(() => {
    setCurrency(JSON.parse(localStorage.getItem("currency")));
    setTheme(JSON.parse(localStorage.getItem("theme")));
  }, []);

  useEffect(() => {
    localStorage.setItem("currency", JSON.stringify(currency));
  }, [currency]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <div>
          <NavBar
            currency={currency}
            theme={theme ? lightTheme : darkTheme}
            handleThemeChange={handleThemeChange}
            handleSelectedCurrency={handleSelectedCurrency}
          />
          <Switch>
            <Route
              exact
              path="/"
              component={props => <HomePage {...props} currency={currency} />}
            />
            <Route
              exact
              path="/coin/:coinId"
              component={props => <CoinPage {...props} currency={currency} />}
            />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};
export default App;
