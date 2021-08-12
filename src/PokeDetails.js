import React, { Component } from "react";
import Loader from "react-loader-spinner";

class PokeDetails extends Component {
  state = { data: {}, loading: true };

  loadPokeData = async () => {
    const { id } = this.props.match.params;
    const url = `https://pokedex-alchemy.herokuapp.com/api/pokedex/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setTimeout(() => {
      this.setState({ data, loading: false });
    }, 1000);
  };
  componentDidMount() {
    this.loadPokeData();
  }

  render() {
    const { data, loading } = this.state;
    return (
      <>
        <section id="loading-img">
          {loading && (
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={80}
              width={80}
            />
          )}
        </section>
        {!loading && (
          <section>
            <h1> {data.pokemon} </h1>
            <div className="poke-deatils-page">
            <h3>type 1: {data.type_1}</h3>
            <h3>type 2: {data.type_2}</h3>
            <h3>ability 1: {data.ability_1}</h3>
            <h3>ability 2: {data.ability_2}</h3>
            <h3>ability hidden: {data.ability_hidden}</h3>
            <h3>shape: {data.shape}</h3>
            <h3>hp: {data.hp}</h3>
            <h3>speed: {data.speed}</h3>
              <img src={data.url_image} alt="poke" />
            </div>
          </section>
        )}
      </>
    );
  }
}

export default PokeDetails;
