import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../../routes";
import Loader from "react-loader-spinner";

const Navigation = lazy(() => import("../Navigation/Navigation"));
const HomePage = lazy(() => import("../../views/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../views/MoviePage/MoviesPage"));

const MovieDetailsPage = lazy(() =>
  import("../../views/MovieDetailsPage/MovieDetailsPage")
);
const Cast = lazy(() => import("../../views/Cast/Cast"));
const Reviews = lazy(() => import("../../views/Reviews/Reviews"));

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        }
      >
        <Navigation />
        <Switch>
          <Route path={routes.home} exact component={HomePage} />
          <Route path={routes.movies} exact component={MoviesPage} />
          <Route path={routes.moviesDetails} component={MovieDetailsPage} />
          <Route component={HomePage} />
          <Route path={routes.movieCast} component={Cast} />
          <Route path={routes.movieReview} component={Reviews} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
