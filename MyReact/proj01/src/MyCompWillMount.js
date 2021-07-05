import React, { Component } from "react";

export class MyCompWillMount extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Welcome!" };
  }

  componentWillMount() {
    this.setState({
      text: "Welcome to React2",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

export default MyCompWillMount;
