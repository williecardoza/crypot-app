import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { CoinList, CoinPage, Portfolio } from "./pages";
import { NavBar } from "./components"
import { ThemeProvider } from "styled-components";

const darkTheme = {
  body: "#333131",
  font: "#FFFFFF"
}

const lightTheme = {
  body: "#F5F5F5",
  font: "#000000"
}

class App extends React.Component{
  state = {
    on: true
  }
  render(){
    return (
      <ThemeProvider theme={this.state.on ? darkTheme : lightTheme}>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/"  component={CoinList}/>
            <Route exact path="/coinPage/:coinId" component={CoinPage}/>
            <Route exact path="/portfolio" component={Portfolio}/>
          </Switch>
        </div>
      </Router>
      </ThemeProvider>
    );
  }
}
export default App
