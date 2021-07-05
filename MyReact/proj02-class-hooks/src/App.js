import logo from "./logo.svg";
import React from 'react';
import "./App.css";
import ComponentWillMount from "./components/ComponentWillMount01";
import MySelectComponent from "./components/MySelectComponent";
import MyUseEffect from "./components/MyUseEffect";
import MyUseState from "./components/MyUseState";

class App extends React.Component {

  showold = false;

  constructor(){
    super();
    this.state = 
    { 
      color: "green" 
    };

    this.doClickChangeColor = this.doClickChangeColor.bind(this);
  }
  

  doClickChangeColor = ()=> {
    this.setState((prev)=> ({
      color : "red"
    }));
    console.log(this.state.color);
  }

  render() {
    //  setTimeout(() => {
    //    this.setState({ color: "wheat" });
    //  }, 4000);
    let content = "";
    let a = <h2>I am from App1</h2>;

    if (this.showold){
      content = (<div>
                  <MySelectComponent/>
                  <hr/>
                  <MyUseState/>
                  <hr/>
                  <MyUseEffect/>
              </div>);
    } else {
      content = <div>
        <h1>Change the Props</h1>
        <button onClick={this.doClickChangeColor}>ChangeTheColor</button>
        <ComponentWillMount color={this.state.color} />
      </div>;
      
    }


    return (
      <div>{content}</div>
    );
  }
}

export default App;
