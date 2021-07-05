import React, { Component } from "react";
import HOC from "./HOC";

class LikesCount extends Component {

  constructor(props){
    super(props)
  }


  render() {
    return (
      <div>
        {this.props.CountNumber} <br />
        <button onClick={this.props.handleCLick}>Like👍🏻</button>
      </div>
    );
  }
};

const EnhancedLikes = HOC(LikesCount, 5);

export default EnhancedLikes;