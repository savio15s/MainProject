import React, { Component } from 'react'

export default class MyButton extends Component {

    constructor(){
        super();
        this.state = {
            buttontext : "Initial State"
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(){
        // this.setState(()=>{
        //     return {
        //         buttontext : "Button Clicked"
        //     };
        // });

        this.setState({
            buttontext : "Button Clicked"
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.handleButtonClick}>{this.state.buttontext}</button>
            </div>
        )
    }
}
