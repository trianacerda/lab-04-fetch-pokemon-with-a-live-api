import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <div className="links">
          <NavLink exact to="/">
            Home Page
          </NavLink>
          <NavLink to="/pokemon">All The Poke</NavLink>
          <NavLink to="/pokemon/:id">Poke Details</NavLink>
        </div>
      </header>
    );
  }
}

export default Header;
