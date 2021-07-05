import React, { Component } from 'react'

export default class CharacterInfoPage extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h2>{this.props.chosenChoiceNumber}</h2>
            </div>
        )
    }
}
