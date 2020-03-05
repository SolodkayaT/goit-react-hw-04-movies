import React, { Component } from "react";
import moviesApi from "../services/moviesApi";

export default class Cast extends Component {
  state = {
    actors: []
  };

  componentDidMount() {
    moviesApi
      .fetchMoviesActors(this.props.match.params.movieId)
      .then(actors => this.setState({ actors }));
  }
  render() {
    const { actors } = this.state;
    return (
      <>
        <h2>Cast</h2>
        {actors && <p>{actors.map(actor => actor).join(", ")}</p>}
      </>
    );
  }
}
