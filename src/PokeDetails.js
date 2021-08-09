import React, { Component } from "react";

class PokeDetails extends Component {
  state = { data: {} };

  loadPokeData = async () => {
    const { id } = this.props.match.params;
    const url = `https://pokedex-alchemy.herokuapp.com/api/pokedex/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data });
  };
  componentDidMount() {
    this.loadPokeData();
  }

  render() {
    const { data } = this.state;
    return (
      <section>
        <h1> {data.pokemon} </h1>
        <div className="poke-deatils-page">
          <img src={data.url_image} alt="poke" />
        </div>
      </section>
    );
  }
}

export default PokeDetails;
