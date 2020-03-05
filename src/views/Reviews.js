import React, { Component } from "react";
import moviesApi from "../services/moviesApi";

export default class Reviews extends Component {
  state = {
    reviews: []
  };

  componentDidMount() {
    moviesApi
      .fetchMoviesReviews(this.props.match.params.movieId)
      .then(reviews => this.setState({ reviews }));
  }
  render() {
    const { reviews } = this.state;
    return (
      <>
        <p>Hello</p>
        {reviews.length === 0 && "There is no reviews!"}
        {reviews.length > 0 && (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>Comment: {review.content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
