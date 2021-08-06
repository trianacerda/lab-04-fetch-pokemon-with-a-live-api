import React, { Component } from "react";

class Dropdown extends Component {
  render() {
    const { label, options, changeEvent } = this.props;
    return (
      <div className="dropdown-container">
        <label>{label}</label>
        <select onChange={changeEvent}>
          {options.map((item, index) => (
            <option key={index} value={item}>
              {item === " " ? "All Pokemon" : item}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Dropdown;
