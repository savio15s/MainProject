import './App.css';
import React from "react";
<<<<<<< HEAD
import MyLabelClass from './components/MyLabelClass';
import MyLabelFunction from './components/MyLabelFunction';

function App() {
  let dte = new Date(2019,2,3);
  return (
      <div>
        <MyLabelClass aa="test13" tt={dte.toString()}/>
        <hr/>
        <MyLabelFunction aa="test13" tt={dte.toString()}/>
      </div>
  )
  //return React.createElement("div",{},"i am from parent div")
  //return React.createElement("div",{class:"div1"},
  //          React.createElement("h2",{},"Lets Get Started1"),
  //          React.createElement("hr"),
  //          React.createElement("h2",{},"Lets Get Started2")
  //          )
=======

function App() {
  //return React.createElement("div",{},"i am from parent div")
  return React.createElement("div",{class:"div1"},
            React.createElement("h2",{},"Lets Get Started1"),
            React.createElement("hr"),
            React.createElement("h2",{},"Lets Get Started2")
            )
>>>>>>> 7a2b5e1093478a025252f7a7c32007ed8c2b0eff
}


 //return (
  // <div>
  //   <h2>Let's get started!</h2>
  //   <Expenses data={expenses}></Expenses>
  // </div>
  //);

export default App;
