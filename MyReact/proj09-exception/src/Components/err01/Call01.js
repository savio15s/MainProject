import React from "react";
import Farewell from "./Farewell";
import Greeting from "./Greet";
import ReactDOM from 'react-dom'

export default function Call01() {
  const data = "tttt";
  return (
    <div>
      <Farewell subject={data}/> 
      <hr/>
      <Farewell/>  
    </div>
  );
}
  