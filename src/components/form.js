import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      input: []
    };
  }
  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleOnSubmit = () => {
    const Data = {
      description: this.state.description
    };

    this.setState({ input: this.state.input.concat(Data) });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="todo"
          name="description"
          onChange={this.handleOnChange}
        />
        <button onClick={this.handleOnSubmit}>Submit</button>
      </div>
    );
  }
}

export default Form;
