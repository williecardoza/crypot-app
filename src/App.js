import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { HomePage, CoinPage, Portfolio } from "./pages";
import { NavBar } from "./components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

class App extends React.Component {
  state = {
    currency: JSON.parse(localStorage.getItem("currency")),
    theme: false,
  };
  handleThemeChange = () => {
    this.setState({ theme: !this.state.theme });
  };

  handleSelectedCurrency = currency => {
    this.setState({ currency: currency });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      localStorage.setItem("theme", JSON.stringify(this.state.theme));
    }
    if (prevState.currency !== this.state.currency) {
      localStorage.setItem("currency", JSON.stringify(this.state.currency));
    }
  }

  componentDidMount() {
    this.setState({
      currency: JSON.parse(localStorage.getItem("currency")),
      theme: JSON.parse(localStorage.getItem("theme")),
    });
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Router>
          <div>
            <NavBar
              theme={this.state.theme ? lightTheme : darkTheme}
              handleThemeChange={this.handleThemeChange}
              handleSelectedCurrency={this.handleSelectedCurrency}
            />
            <Switch>
              <Route
                exact
                path="/"
                component={props => (
                  <HomePage
                    {...props}
                    theme={this.state.theme ? lightTheme : darkTheme}
                    currency={this.state.currency}
                  />
                )}
              />
              <Route exact path="/coinPage/:coinId" component={CoinPage} />
              <Route exact path="/portfolio" component={Portfolio} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}
export default App;
