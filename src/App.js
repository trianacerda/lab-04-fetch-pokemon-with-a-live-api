import { Component } from 'react';
import './App.css';
import Pokelist from './Pokelist.js';


class App extends Component {
state = { pokeData: [], loading: true, query: null }


fetchData = async () => {
  const { query, desc, asc } = this.state;
  let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    if (query){
      url = url + `?search=${query}`
    }
  let fetchPokeData = await fetch (url);
  let pokeData = await fetchPokeData.json();

  this.setState({ pokeData,  loading: false });
}

updateQuery = (event) =>{
  this.fetchData()
  this.setState({ query: event.target.value});
}
changeOrder = (event) =>{
  this.fetchData()
  this.setState({ sortOrder: event.target.value});
}
updateQuery = (event) =>{
  this.setState({ query: event.target.value});
}

componentDidMount(){
  this.fetchData();
}
render() { 
    const { pokeData, loading, sortOrder, } = this.state;
    return (
      <> 
        <h2>POKEMON</h2>
        {loading && <h3> LOADING POKEMON, PLZ WAIT</h3>}
        {!loading && (
            <section>
              <input onChange={this.updateQuery} type='text'></input>
              <button onClick={this.fetchData}>Search Pokemon</button>
              <select onChange={this.changeOrder}>
                <option>ASC</option>
                <option>DESC</option>
              </select>
              <Pokelist
              pokedex={ pokeData }
              />
              </section>
              
        )}
      </>
    );
  }
}
 
export default App;




 /* <input></input>
      <select>ASC/DESC</select>
        <option>DESC</option>
        <option>ASC</option> */

      /* loadData
      componentDidMount()
      fetchData
      handleChange */
