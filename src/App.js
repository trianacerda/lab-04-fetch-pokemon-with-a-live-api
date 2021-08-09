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
            <Route path="/" component={Home} />
            <Route path="/pokemon" component={PokeContainer} />
            <Route path="/pokemon/:id" component={PokeDetails} />
          </Switch>
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
