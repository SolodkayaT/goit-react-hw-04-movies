import React from "react";
import { NavLink } from "react-router-dom";

const AdditionalInfo = movieId => {
  return (
    <ul>
      <li>
        <NavLink exact to={`/movies/${movieId.id}/cast`}>
          Cast
        </NavLink>
      </li>
      <li>
        <NavLink to={`/movies/${movieId.id}/reviews`}>Reviews</NavLink>
      </li>
    </ul>
  );
};
export default AdditionalInfo;
