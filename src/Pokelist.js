import React, { Component } from 'react';
import Pokeitem from './Pokeitem.js';

class Pokelist extends Component {
    render() { 
        return (
            <ul>
                {this.props.results.pokemon.map((item) => {
                <Pokeitem
                key={ item.pokemon }
                name={ item }
                />
                })}
            </ul>
        );
    }
}
 
export default Pokelist;

