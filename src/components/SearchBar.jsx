import React, { Component } from "react";

export default class SearchBar extends Component {
  handleSearch = event => {
    this.props.searchFunction(event.target.value);
  };

  render() {
    return (
      <div className="form">
        <label>Search</label>
        <input
          type="text"
          placeholder="Type here..."
          onChange={this.handleSearch}
        />
      </div>
    );
  }
}
