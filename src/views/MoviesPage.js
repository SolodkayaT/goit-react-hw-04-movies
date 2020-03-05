import React, { Component } from "react";
import { Link } from "react-router-dom";
import getQueryParams from "../utils/getQueryParams";
import Loader from "react-loader-spinner";
import Notification from "../components/Notification/Notification";
import moviesApi from "../services/moviesApi";
import Searchbox from "../components/Searchbox/Searchbox";

export default class MoviesPage extends Component {
  state = {
    movies: [],
    error: null,
    isLoading: false
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);
    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  fetchMovies = query => {
    this.setState({ isLoading: true });

    moviesApi
      .fetchMoviesWithQuery(query)
      .then(movies => this.setState({ movies }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleChangeQuery = query => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      //...this.props.location можно делать так (вместо строки выше)
      search: `query=${query}`
    });
  };

  render() {
    const { movies, error, isLoading } = this.state;
    const { match } = this.props;

    return (
      <>
        {error && <Notification message={error.message} />}
        <Searchbox onSubmit={this.handleChangeQuery} />
        {isLoading && (
          <Loader type="Rings" color="#somecolor" height={80} width={80} />
        )}
        {movies.length > 0 && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `${match.url}/${movie.id}`,
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
    );
  }
}
