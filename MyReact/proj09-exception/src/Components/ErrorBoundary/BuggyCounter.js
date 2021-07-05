import React, { Component } from 'react'

export default class BuggyCounter extends Component {
  state = {
    counter: 0,
  };
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    if (this.state.counter === 5) {
      // Simulate an error!
      throw new Error("I crashed!");
    }
    return (   
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}
