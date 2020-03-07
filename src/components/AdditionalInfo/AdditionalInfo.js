import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AdditionalInfo.module.css";

const AdditionalInfo = movieId => {
  return (
    <ul className={styles.infoMenu}>
      <li className={styles.infoMenuItem}>
        <NavLink
          exact
          to={`/movies/${movieId.id}/cast`}
          className={styles.infoLink}
          activeStyle={{ color: "blue" }}
        >
          Cast
        </NavLink>
      </li>
      <li className={styles.infoMenuItem}>
        <NavLink
          to={`/movies/${movieId.id}/reviews`}
          className={styles.infoLink}
          activeStyle={{ color: "blue" }}
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  );
};
export default AdditionalInfo;
