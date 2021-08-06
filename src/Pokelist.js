import React, { Component } from "react";
import Pokeitem from "./Pokeitem.js";

class Pokelist extends Component {
  render() {
    const { pokedex } = this.props;
    return (
      <ul>
        {pokedex.map((item, index) => {
          return <Pokeitem key={index} pokemon={item} />;
        })}
      </ul>
    );
  }
}

export default Pokelist;
