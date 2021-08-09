import React, { Component } from "react";
import Pokelist from "./Pokelist.js";
import Dropdown from "./Dropdown.js";
import criteriaList from "./criteriaList.js";
import typeList from "./typeList.js";
import Loader from "react-loader-spinner";

class PokeContainer extends Component {
  state = {
    pokeData: [],
    loading: true,
    query: null,
    sortCriteria: "",
    sortOrder: "asc",
    sortType: "",
    // page: 1,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { query, sortCriteria, sortOrder, sortType } = this.state;
    let url = "https://pokedex-alchemy.herokuapp.com/api/pokedex";
    let searchParams = new URLSearchParams();

    // searchParams.set("page", this.state.page);
    searchParams.set("perPage", 7);

    if (query) {
      searchParams.set("pokemon", query);
    }
    if (sortOrder) {
      searchParams.set("sort", "pokemon");
      searchParams.set("direction", sortOrder);
    }
    if (sortCriteria) {
      searchParams.set(sortCriteria, query);
    }
    if (sortType) {
      searchParams.set("sort", sortType);
    }
    url = url + `?${searchParams.toString()}`;

    let response = await fetch(url);
    let { results } = await response.json();
    setTimeout(() => {
      this.setState({ pokeData: results, loading: false });
    }, 1000);
  };
  changeOrder = async (event) => {
    await this.setState({ sortOrder: event.target.value });
    this.fetchData();
  };
  changeCriteria = async (event) => {
    await this.setState({ sortCriteria: event.target.value });
    this.fetchData();
  };
  changeType = async (event) => {
    await this.setState({ sortType: event.target.value });
    this.fetchData();
  };

  updateQuery = (event) => {
    this.setState({ query: event.target.value });
  };

  render() {
    const changeOrderOptions = [" ", "asc", "desc"];
    const { pokeData, loading } = this.state;

    const filteredPokemon = pokeData.filter(
      (item) =>
        (item.criteriaList === this.state.criteriaList ||
          this.state.criteriaList === pokeData) &&
        (item.changeOrderOptions === this.state.changeOrderOptions ||
          this.state.changeOrderOptions === pokeData) &&
        (item.typeList === this.state.typeList ||
          this.state.typeList === pokeData)
    );

    return (
      <>
        <h2>POKEMON</h2>
        <section id="loading-img">
          {loading && (
            <Loader type="Hearts" color="#00BFFF" height={200} width={500} />
          )}
        </section>
        {!loading && (
          <section>
            <input onChange={this.updateQuery} type="text"></input>
            <button onClick={this.fetchData}>Search Pokemon</button>
            <Dropdown
              label="change criteria"
              options={criteriaList}
              changeEvent={this.changeCriteria}
            />
            <Dropdown
              label="change pokemon order"
              options={changeOrderOptions}
              changeEvent={this.changeOrder}
            />
            <Dropdown
              label="element type"
              options={typeList}
              changeEvent={this.changeType}
            />
            <Pokelist pokedex={filteredPokemon} />
          </section>
        )}
      </>
    );
  }
}

export default PokeContainer;
