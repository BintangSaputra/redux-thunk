import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/todoAction";

class List extends Component {
  componentDidMount() {}
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>TodoList</div>;
  }
}

export default connect(
  null,
  { fetchData }
)(List);
