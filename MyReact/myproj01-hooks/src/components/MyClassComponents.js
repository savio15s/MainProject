import React, { Component } from "react";

export default class MyClassComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "PettaiVellan",
      ts: new Date(),
      count: 0,
      age: 45,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    console.log(this.props.color)
  }

  handleButtonClick = () => {
    console.log("Button Clicked");
    this.setState(
      (prev) => {
        return {
          ...prev,
          count: prev.count + 1,
        };
      },
      (x) => {
        console.log("allis well");
      }
    );
  };

  componentWillMount() {
    console.log("======componentWillMount()==Start");
    console.log(this.state);
    console.log("======componentWillMount()==End");
  }

  componentWillUnmount() {
    console.log("======componentWillUnmount()");
  }

  componentWillReceiveProps(nextProps) {
    console.log("==componentWillReceiveProps==" + this.props.color);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("==shouldComponentUpdate==" + this.props.color + "," + nextProps.color);
      if (this.props.color == nextProps.color){
        return false;
      } else return true;
  }

  render() {
    const clr = this.props.color;
    return (
      <div>
        <h1 style={{ 
                color:clr
                }}>My Class Component</h1>
        <h1>the data 1 is -- {this.state.name}</h1>
        <h1>the data 1 is -- {this.state.ts.toString()}</h1>
        <h1>the data 1 is -- {this.state.count}</h1>
        <h1>the data 1 is -- {this.state.age}</h1>
        <button onClick={() => this.handleButtonClick()}>Add</button>
      </div>
    );
  }
}
