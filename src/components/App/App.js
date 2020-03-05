import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../../routes";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../views/HomePage";
import MoviesPage from "../../views/MoviesPage";
import MovieDetailsPage from "../../views/MovieDetailsPage";
import Cast from "../../views/Cast";
import Reviews from "../../views/Reviews";

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.movies} exact component={MoviesPage} />
        <Route path={routes.moviesDetails} component={MovieDetailsPage} />
        <Route component={HomePage} />
        <Route path={routes.movieCast} component={Cast} />
        <Route path={routes.movieReview} component={Reviews} />
      </Switch>
    </>
  );
};

export default App;
