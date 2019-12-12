import React, { Component } from "react";

export default class GifList extends Component {
  render() {
    return (
      <div className="gif-list">
        {this.props.id.map(id => (
          <img
            src={"https://media2.giphy.com/media/" + id.id + "/200.gif"}
            alt="gif"
            key={id.id}
          />
        ))}
      </div>
    );
  }
}
