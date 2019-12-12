import React, { Component } from "react";
import ReactDOM from "react-dom";
import giphy from "giphy-api";
import SearchBar from "./components/SearchBar.jsx";
import GifList from "./components/GifList.jsx";

import "../assets/stylesheets/application.scss";

const GIPHY_API = "X45LzYs59FJHyYfmR9xEZpwRLdsN5LyU";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { gifs: [] };
  }
  search = query => {
    giphy({ apiKey: GIPHY_API, https: true }).search(
      {
        q: query,
        rating: "g",
        limit: 10
      },
      (err, res) => {
        this.setState({
          gifs: res.data
        });
      }
    );
  };

  render() {
    return (
      <div>
        <h1>Gifs Search Engine</h1>
        <SearchBar searchFunction={this.search} />
        <GifList id={this.state.gifs} />
      </div>
    );
  }
}

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(<App />, root);
}
