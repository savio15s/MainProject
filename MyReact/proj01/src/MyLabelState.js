import React, { Component } from "react";

export class MyLabelState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: true,
      fname: "mr",
      lname: "superstar",
      message: "",
      count: 0,
    };
    this.onButtonOnClickHandler = this.onButtonOnClickHandler.bind(this);
  }

  onButtonOnClickHandler = () => {
    // this.setState({
    //   change: !this.state.change,
    //   message: "modified",
    //   fullname: this.state.fname + this.state.lname,
    //   count: this.state.count + 1,
    // });

    this.setState((state, props) => ({
      change: !this.state.change,
      message: "modified",
      fullname: this.state.fname + this.state.lname,
      count: this.state.count + 1,
    }));
  };

  render() {
    return (
      <div>
        {this.state.message} - {this.state.fullname} - {this.state.count}
        <button onClick={this.onButtonOnClickHandler}>Click Here!</button>
        {this.state.change ? (
          <h1>Welcome to React</h1>
        ) : (
          <h1>A Computer Science Portal for Engineers</h1>
        )}
      </div>
    );
  }
}

export default MyLabelState;
