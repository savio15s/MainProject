import React, { Component } from 'react'
import Mouse from './Mouse'

export default class MouseTracker extends Component {
    constructor(props){
        super(props);
    }

    render() {
        
        return (
            <div>
                HI{this.props.data.getDate()}
                <h1>Mouse Tracker</h1>
                <Mouse></Mouse>
            </div>
        )
    }
}
