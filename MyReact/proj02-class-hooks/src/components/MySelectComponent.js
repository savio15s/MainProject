import React, { Component } from "react";
import CharacterInfoPage from "./CharacterInfoPage";

export default class MySelectComponent extends Component {
  state = {
    characterChoiceNumbers: [1, 2, 3, 4, 5],
    chosenChoiceNumber: 1,
  };

  handleChoiceChange = (newNumber) => {
    this.setState({
      chosenChoiceNumber: newNumber,
    });
  };

  render() {
    return (
      <div>
        <select onChange={(e) => this.handleChoiceChange(e.target.value)}>
          {this.state.characterChoiceNumbers.map((choice,index) => (
            <option key={choice}>{choice}-{index}</option>
          ))}
        </select>
        <CharacterInfoPage chosenChoiceNumber={this.state.chosenChoiceNumber} />
      </div>
    );
  }
}
