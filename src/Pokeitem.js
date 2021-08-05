import React, { Component } from 'react';



class Pokeitem extends Component {
    render() { 
        return (  
            <li>
                <h3>{ this.props.results.pokemon }</h3>
            </li>
        );
    }
}
 
export default Pokeitem;