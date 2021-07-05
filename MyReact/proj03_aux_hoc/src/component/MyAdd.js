import React, { useState, useEffect } from "react";
import Wrap from "./Aux/Wrap";

export default function MyAdd(props) {
  let { data: products } = props;
  
  const [val, setVal] = useState(0);
  const onClickHandler = () => {
    setVal(val + 1);
  };

  useEffect(() => {
    console.log("The data Changed...." + val);
    return () => {
      //setVal(0);
      console.log("Component Un mount....");
    };
  }, [val]);

  return (
    <Wrap>
      <div>
        <h1>{val}</h1>
        <button onClick={onClickHandler}>Increment</button>
      </div>
    </Wrap>
  );
}
