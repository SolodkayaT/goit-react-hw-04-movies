import React, { Component } from "react";
import moviesApi from "../../services/moviesApi";
import Loader from "react-loader-spinner";
import Notification from "../../components/Notification/Notification";

export default class Reviews extends Component {
  state = {
    reviews: [],
    error: null,
    isLoading: false
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    moviesApi
      .fetchMoviesReviews(this.props.match.params.movieId)
      .then(reviews => this.setState({ reviews }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }
  render() {
    const { reviews, isLoading, error } = this.state;
    return (
      <>
        {error && <Notification message={error.message} />}
        {isLoading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
        {reviews.length === 0 && "There is no reviews!"}
        {reviews.length > 0 && (
          <>
            <ul>
              {reviews.map(review => (
                <li key={review.id}>
                  <h3>Author: {review.author}</h3>
                  <p>Comment: {review.content}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    );
  }
}
