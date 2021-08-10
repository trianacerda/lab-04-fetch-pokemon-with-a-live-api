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
              <img src={data.url_image} alt="poke" />
            </div>
          </section>
        )}
      </>
    );
  }
}

export default PokeDetails;
