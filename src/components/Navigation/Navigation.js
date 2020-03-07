import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "../Navigation/Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={styles.navigationMenu}>
      <li className={styles.navigationMenuItem}>
        <NavLink
          exact
          to={routes.home}
          activeStyle={{ color: "blue" }}
          className={styles.navigationLink}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.navigationMenuItem}>
        <NavLink
          to={routes.movies}
          activeStyle={{ color: "blue" }}
          className={styles.navigationLink}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
