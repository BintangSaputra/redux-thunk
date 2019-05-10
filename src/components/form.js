import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="todo" name="description" />
        <button>Submit</button>
      </div>
    );
  }
}

export default Form;
