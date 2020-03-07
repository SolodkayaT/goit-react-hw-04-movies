import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import Notification from "../../components/Notification/Notification";
import moviesApi from "../../services/moviesApi";
import routes from "../../routes";
import styles from "./HomePage.module.css";

export default class HomePage extends Component {
  state = {
    movies: [],
    error: null,
    isLoading: false
  };
  componentDidMount() {
    this.setState({ isLoading: true });

    moviesApi
      .fetchTrendingMovie()
      .then(movies => this.setState({ movies }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }
  render() {
    const { movies, error, isLoading } = this.state;

    return (
      <>
        {error && <Notification message={error.message} />}

        {movies && (
          <>
            <h1 className={styles.HomepageTitle}>Home page</h1>
            {isLoading && (
              <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
              />
            )}
            <h2 className={styles.HomepageTitle}>Popular movies:</h2>
            {movies.length > 0 && (
              <ul>
                {movies.map(movie => (
                  <li className={styles.popularMovies} key={movie.id}>
                    <Link
                      to={{
                        pathname: `${routes.movies}/${movie.id}`,
                        state: { from: this.props.location }
                      }}
                      className={styles.popularMoviesLink}
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
