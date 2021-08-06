import { Component } from "react";
import "./App.css";
import Pokelist from "./Pokelist.js";
import Dropdown from "./Dropdown.js";
import criteriaList from "./criteriaList.js";

class App extends Component {
  state = { pokeData: [], loading: true, query: null };

  fetchData = async () => {
    const { query } = this.state;
    let url = "https://pokedex-alchemy.herokuapp.com/api/pokedex";
    if (query) {
      url = url + `?search=${query}`;
    }
    let response = await fetch(url);
    let { results } = await response.json();

    this.setState({ pokeData: results, loading: false });
  };

  changeOrder = (event) => {
    this.fetchData();
    this.setState({ sortOrder: event.target.value });
  };
  updateQuery = (event) => {
    this.setState({ query: event.target.value });
  };

  componentDidMount() {
    this.fetchData();
  }
  render() {
    const { pokeData, loading } = this.state;
    return (
      <>
        <h2>POKEMON</h2>
        {loading && <h3> LOADING POKEMON, PLZ WAIT</h3>}
        {!loading && (
          <section>
            <input onChange={this.updateQuery} type="text"></input>
            <button onClick={this.fetchData}>Search Pokemon</button>
            <Dropdown
              label="asc or desc order"
              options={[]}
              changeEvent={this.changeOrder}
            />
            <Dropdown
              label="change criteria"
              options={criteriaList}
              changeEvent={this.changeOrder}
            />
            <Pokelist pokedex={pokeData} />
          </section>
        )}
      </>
    );
  }
}

export default App;

/* <input></input>
      <select>ASC/DESC</select>
        <option>DESC</option>
        <option>ASC</option> */

/* loadData
      componentDidMount()
      fetchData
      handleChange */
