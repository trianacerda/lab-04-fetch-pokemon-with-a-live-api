import { Component } from "react";
import "./App.css";
import Pokelist from "./Pokelist.js";
import Dropdown from "./Dropdown.js";
import criteriaList from "./criteriaList.js";

class App extends Component {
  state = {
    pokeData: [],
    loading: true,
    query: null,
    sortCriteria: "",
    sortOrder: "",
  };

  fetchData = async () => {
    const { query, sortCriteria, sortOrder } = this.state;
    let url = "https://pokedex-alchemy.herokuapp.com/api/pokedex";
    if (query) {
      url = url + `?${sortCriteria}=${query}`;
    // } else if {
    //   url = url + `?${sortOrder}=${query}`;
    // }
    
    let response = await fetch(url);
    let { results } = await response.json();

    this.setState({ pokeData: results, loading: false });
  }; 
  changeOrder = async (event) => {
    await this.setState({ sortOrder: event.target.value });
    this.fetchData();
  };
  changeCriteria = async (event) => {
    await this.setState({ sortCriteria: event.target.value });
    this.fetchData();
  };

  updateQuery = (event) => {
    this.setState({ query: event.target.value });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const changeOrderOptions = ["asc", "desc"];
    const { pokeData, loading } = this.state;

    const filteredPokemon = pokeData.filter(
      (item) =>
        (item.criteriaList === this.state.criteriaList ||
          this.state.criteriaList === pokeData) &&
        (item.changeOrderOptions === this.state.changeOrderOptions ||
          this.state.changeOrderOptions === pokeData)
    );

    return (
      <>
        <h2>POKEMON</h2>
        {loading && <h3> LOADING POKEMON, PLZ WAIT</h3>}
        {!loading && (
          <section>
            <input onChange={this.updateQuery} type="text"></input>
            <button onClick={this.fetchData}>Search Pokemon</button>
            <Dropdown
              label="change pokemon order"
              options={changeOrderOptions}
              changeEvent={this.changeOrder}
            />
            <Dropdown
              label="change criteria"
              options={criteriaList}
              changeEvent={this.changeCriteria}
            />
            <Pokelist pokedex={filteredPokemon} />
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
