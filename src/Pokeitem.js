import React, { Component } from "react";

class Pokeitem extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <li>
        <h3>{pokemon.pokemon}</h3>
        <h3>{pokemon.pokemon}</h3>
      </li>
    );
  }
}

export default Pokeitem;
