import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pokeitem extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <li>
        <Link to={`/pokemon/${pokemon._id}`}>
          <section id="pokeText">
            <h3>pokemon: {pokemon.pokemon}</h3>
          </section>
          <section id="pokeImg">
            <img src={pokemon.url_image} alt={pokemon.pokemon}></img>
          </section>
        </Link>
      </li>
    );
  }
}

export default Pokeitem;
