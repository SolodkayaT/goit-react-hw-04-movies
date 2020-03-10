import React, { Component } from "react";
import moviesApi from "../../services/moviesApi";
import Loader from "react-loader-spinner";
import Notification from "../../components/Notification/Notification";
import routes from "../../routes";
import styles from "./Cact.module.css";

export default class Cast extends Component {
  state = {
    actors: [],
    error: null,
    isLoading: false
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    moviesApi
      .fetchMoviesActors(this.props.match.params.movieId)
      .then(actors => this.setState({ actors }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }
  render() {
    const { actors, isLoading, error } = this.state;
    return (
      <>
        {error && <Notification message={error.message} />}
        {isLoading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        <h2>Cast</h2>
        {actors && (
          <ul>
            {actors.map(actor => (
              <li kye={actor.id} className={styles.actorListItem}>
                <img
                  className={styles.image}
                  src={`${routes.actorsProfile + actor.profile_path}`}
                  alt={actor.name}
                />

                <span className={styles.actorName}> {actor.name}</span>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
