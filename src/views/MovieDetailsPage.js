import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import routes from "../routes";
import Loader from "react-loader-spinner";

import moviesApi from "../services/moviesApi";
import AdditionalInfo from "../components/AdditionalInfo/AdditionalInfo";
import Cast from "../views/Cast";
import Reviews from "../views/Reviews";
import Notification from "../components/Notification/Notification";

export default class MovieDetailsPage extends Component {
  static defaultProps = {
    movieId: 0
  };

  static propTypes = {
    movieId: PropTypes.number.isRequired
  };
  state = {
    movie: null,
    error: null,
    isLoading: false
  };
  componentDidMount() {
    this.setState({ isLoading: true });

    moviesApi
      .fetchMovieDetails(this.props.match.params.movieId)
      .then(movie => this.setState({ movie }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  handleGoBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      return this.props.history.push(state.from);
    }
    this.props.history.push(routes.home);
  };

  render() {
    const { movie, error, isLoading } = this.state;
    return (
      <>
        {error && <Notification message={error.message} />}
        {isLoading && (
          <Loader type="Rings" color="#somecolor" height={80} width={80} />
        )}
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        {movie && (
          <>
            <h1>{movie.original_title}</h1>
            <img
              src={routes.movieImage + movie.poster_path}
              alt={movie.title}
            />
            <p>User score: {movie.popularity}</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>{movie.genres.map(e => e.name).join()}</p>
            <AdditionalInfo id={movie.id} />
            <Switch>
              <Route path={routes.movieCast} component={Cast} />
              <Route path={routes.movieReview} component={Reviews} />
            </Switch>
          </>
        )}
      </>
    );
  }
}
