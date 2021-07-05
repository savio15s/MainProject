import React, { Component } from "react";

export default class ComponentWillMount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: new Date(),
      onoff: false,
      name: "Constructor",
    };
    console.log("============================In Constructor" + this.state.name);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentWillMount() {
    this.setState((state, props) => ({
      ...state,
      name: "ComponentWillMount",
      onoff: !state.onoff,
    }));

    console.log(
      "============================In componentWillMount-before render()" +
        this.state.name
    );
  }

  /**
   * componentWillReceiveProps is a method that is called before a component
   * does anything with the new props. This method is called with the new props
   * passed as an argument
   * @param {*} nextProps
   */
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("==componentWillReceiveProps==" + this.props.color);
  }

  /**
   *
   * @param {This method is called before the component re-renders after receiving
   * a new set of props or there’s a new state. We can see that it receives two arguments,
   * the next props, and the next state. The default behavior is for a component
   * to re-render once there’s a change of state of props.} nextProps
   * @param {*} nextState
   * @returns
   */
  shouldComponentUpdate(nextProps, nextState) {
    let b = true;

    console.log(this.props.color + "," + nextProps.color);
    if (this.props.color == nextProps.color) {
      console.log("Color False");
      b = false;
    } else b = true;

    console.log(this.state.onoff + "," + nextState.onoff);
    if (this.state.onoff == nextState.onoff) {
      console.log("onoff False");
      b = false;
    } else b = true;

    console.log("======================" + b);

    return b;
  }

  /**
   * componentWillUpdate is the method that can be used to perform preparation
   * before re-rendering occurs. You cannot call this.setState in this method.
   */
  componentWillUpdate(nextProps, nextState) {
    // Do something here
  }

  /**
   * componentDidUpdate is called after any rendered HTML has finished loading.
   * It receives two arguments, the props and state of the component before the current
   * updating period began.
   *   componentDidUpdate is the best place to perform an interaction with a non-React
   * environment like the browser or making HTTP requests. This should be done as long as
   * you comp
   */
  componentDidUpdate(prevProps, prevState) {
    if (this.props.input == prevProps.input) {
      // make ajax calls
      // Perform any other function
    }
  }

  /**
   * This is the only unmounting method. componentWillUnmount is called right
   * before a component is removed from the DOM. This is where you can perform
   * any cleanups that should be done such as invalidating timers, canceling
   * network requests, removing event listeners or canceling any subscriptions
   * made in componentDidMount
   */
  componentWillUnmount() {
    //document.removeEventListener("click", SomeFunction);
  }

  /**
   * A component becomes an error boundary if it defines the componentDidCatch method.
   * In this method, this.setState can be called and used to catch an unhandled JavaScript
   * error in a child component tree and display a fallback UI instead of the component
   * that crashed. These errors are caught during rendering, in lifecycle methods,
   * and in constructors of the whole tree below them.
   */
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  onClickHandler = () => {
    console.log("Updated");
    this.setState((state, props) => ({
      ...state,
      onoff: !state.onoff,
    }));
  };

  render() {
    console.log("============================In render()" + this.state.onoff);
    return (
      <div>
        <h1 style={{ color: this.props.color }}>
          {this.state.timestamp.toISOString()}
        </h1>
        <hr />
        <h2>{this.state.name}</h2>
        <h2>{this.state.onoff.toString()}</h2>
        <button onClick={this.onClickHandler}>Click Me</button>
      </div>
    );
  }

  componentDidMount() {
    console.log(
      "============================In componentDidMount-After render()"
    );
  }
}
