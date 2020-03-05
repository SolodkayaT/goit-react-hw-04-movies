import React from "react";
import PropType from "prop-types";

const Notification = error => <p>Somthing went wrong: {error.message}</p>;
export default Notification;

Notification.propType = {
  error: PropType.string
};

Notification.defaultProps = {
  error: "Somthing went wrong :("
};
