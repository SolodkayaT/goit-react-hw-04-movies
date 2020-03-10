import React from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";

const NotFound = () => {
  return (
    <>
      <h1>You are lost!</h1>
      <p>
        Please, go <Link to={routes.home}>HOME PAGE!</Link>
      </p>
    </>
  );
};
export default NotFound;
