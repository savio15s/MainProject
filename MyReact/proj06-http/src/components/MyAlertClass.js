import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

export default class MyAlertClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sweetalert: null,
        alert:null
    }
    this.hideAlert = this.hideAlert.bind(this);
  }

  hideAlert = (e) => {
    this.setState({
        sweetalert: null,
        alert: null
    });
}

  render() {
    return (
      <div>
        <SweetAlert success title="Woot!" onConfirm={this.hideAlert.bind(this)}>
          {this.props.message}
        </SweetAlert>
      </div>
    );
  }
}
