import React, { Component } from 'react'

export default class MyErrorBoundary extends Component {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI.
    return { error: error };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service
    //logErrorToMyService(error, info);
    console.log("@@@@@@@@@@@@@@@@");

    console.log(error + "," + info);
  }   

  //logErrorToServices = console.log;

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return <p>Something broke</p>;
    }
    return this.props.children;
  }
}
