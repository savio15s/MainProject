import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Mouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      count: 0,
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove = (event) => {
    
    this.setState((state, props) => ({
      x: event.clientX,
      y: event.clientY,
      count: state.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.props.data}</h1>
        <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
          {/* ...but how do we render something other than a <p>? */}
          <p>
            The current mouse position is ({this.state.x}, {this.state.y})
          </p>
        </div>
      </div>
    );
  }
}
