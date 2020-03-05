import React, { Component } from "react";
import { Link } from "react-router-dom";
import moviesApi from "../services/moviesApi";
import routes from "../routes";

export default class HomePage extends Component {
  state = {
    movies: []
  };
  componentDidMount() {
    moviesApi.fetchTrendingMovie().then(movies => this.setState({ movies }));
  }
  render() {
    const { movies } = this.state;

    return (
      <>
        {movies && (
          <>
            <h1>Home page</h1>
            <h2>Popular movies:</h2>
            {movies.length > 0 && (
              <ul>
                {movies.map(movie => (
                  <li key={movie.id}>
                    <Link
                      to={{
                        pathname: `${routes.movies}/${movie.id}`,
                        state: { from: this.props.location }
                      }}
                    >
                      {movie.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </>
    );
  }
}
