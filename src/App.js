import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import PokeContainer from "./PokeContainer.js";
import PokeDetails from "./PokeDetails.js";
import Header from "./Header.js";
import Home from "./Home.js";

class App extends Component {
  state = {};
  render() {
    return (
      <section className="pokeApp">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemon" component={PokeContainer} />
            <Route exact path="/pokemon/:id" component={PokeDetails} />
          </Switch>
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
