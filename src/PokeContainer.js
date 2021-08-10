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
    page: 1,
    lastPage: 1,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { query, sortCriteria, sortOrder, sortType } = this.state;
    let url = "https://pokedex-alchemy.herokuapp.com/api/pokedex";
    let searchParams = new URLSearchParams();

    searchParams.set("page", this.state.page);
    searchParams.set("perPage", 20);

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
    const lastPage = Math.ceil(results.count / results.perPage);
    console.log(lastPage);
    setTimeout(() => {
      this.setState({ pokeData: results, loading: false, lastPage });
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
  prevPage = async () => {
    await this.setState({ page: this.state.page - 1 });
    this.fetchData();
  };
  nextPage = async () => {
    await this.setState({ page: this.state.page + 1 });
    this.fetchData();
  };
  goToLast = async () => {
    this.setState({ page: this.state.lastPage });
    this.fetchData();
  };

  searchPokemon = async () => {
    await this.setState({ page: 1 });
    this.fetchData();
  };

  render() {
    const changeOrderOptions = [" ", "asc", "desc"];
    const { pokeData, loading, page, lastPage } = this.state;

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
        <input onChange={this.updateQuery} type="text"></input>
        <button onClick={this.searchPokemon}>Search Pokemon</button>
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
        <div className="next-prev-page">
          <button onClick={this.prevPage}>Prev</button>
          <button onClick={this.nextPage}>Next</button>
          {/* <button onClick={this.goToLast}>Last Page</button> */}
          {/* {page > 1 && }
          {page < lastPage && (
            <>
            </>
          )} */}
        </div>
        CURRENT PAGE: {this.state.page}
        {/* <br />
        LAST PAGE: {this.state.lastPage} */}
        {loading && (
          <Loader type="Hearts" color="#00BFFF" height={200} width={500} />
        )}
        {!loading && (
          <>
            <Pokelist pokedex={filteredPokemon} />
          </>
        )}
      </>
    );
  }
}

export default PokeContainer;
