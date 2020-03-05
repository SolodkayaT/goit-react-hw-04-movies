import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink exact to={routes.home}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={routes.movies}>Movies</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
