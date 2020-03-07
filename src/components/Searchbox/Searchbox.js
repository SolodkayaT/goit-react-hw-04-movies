import React, { Component } from "react";
import styles from "./SearchBox.module.css";

export default class Searchbox extends Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
    );
  }
}
