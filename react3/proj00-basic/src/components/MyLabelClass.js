import React, { Component } from 'react'
import './MyLabelClass.css';

export default class MyLabelClass extends Component {

    constructor(props){
        super(props)
        this.props = props;
    }

    render() {
        let response = "";
        const {tt,aa} = this.props;
        const val = false;
        const datas = ["a","b","c","d","e","f"];
        if (false){
            response = (<div>
                <h2>TRUE DATA1</h2>
            </div>);
        } else {
            response = (<div>
                <h2>False DATA2</h2>
            </div>);
        }
        return (
            <div>
                <p className="abcd">The value is..{this.props.tt}</p>
                {response}
                <h3>The value is..{tt}-{aa}</h3>
                {datas.map((x,i)=>{
                    return <h3 key={i}>The data is...{x}</h3>
                })}
                {val && <div>124</div>}
            </div>
        )
    }
}
