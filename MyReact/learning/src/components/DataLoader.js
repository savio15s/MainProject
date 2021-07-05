import React, { Component } from 'react'

export default class DataLoader extends Component {

    constructor(){
        super();
        this.state = {
            data:[]
        };
    }

    componentDidMount(){
        fetch("http://localhost:4000/products")
            .then(response => response.json())
            .then(data=>{
                this.setState({
                    data:data
                })
            })
    }


    render() {
        return (
            <div>
                <ul>
                {this.state.data.map((ele)=>{
                    console.log(ele);
                    return <li key={ele.name}>{ele.name}</li>
                })}
                </ul>
            </div>
        )
    }
}
