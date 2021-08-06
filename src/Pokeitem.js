import React, { Component } from "react";

class Pokeitem extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <li>
        <h3>pokemon: {pokemon.pokemon}</h3>
        <h3>type 1: {pokemon.type_1}</h3>
        <h3>type 2: {pokemon.type_2}</h3>
        <h3>ability 1: {pokemon.ability_1}</h3>
        <h3>ability 2: {pokemon.ability_2}</h3>
        <h3>ability hidden: {pokemon.ability_hidden}</h3>
        <h3>shape: {pokemon.shape}</h3>
      </li>
    );
  }
}

export default Pokeitem;
