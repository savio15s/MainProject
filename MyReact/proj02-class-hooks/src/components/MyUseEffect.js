import React,{useState,useEffect} from "react";

export default function MyUseEffect(props) {
  const [name, setName] = useState("Basha");
  const [age, setAge] = useState(0);


  /**
   * Using useEffect hook is like having both componentDidMount and componentDidUpdate 
   * in one single method, since useEffect runs on every render. 
   * It accepts two arguments:
   * (mandatory) A function to run on every render
   * (optional) An array of state variables to watch for changes. 
   * useEffect will be skipped if none of the variables are updated.
   * 
   */
  useEffect(() => {
    console.log(`Hello I'm ${name}`);

    return () => { console.log("componentWillUnmount effect"); }

  },[age,name]);
  //Empty argument in the second function, will runn only once

  return (
    <div>
      <p>{`Hello I'm ${name}`}</p>
      <p>{`Hello My age is' ${age}`}</p>
      <button
        onClick={() => {
          setName("AlexPandiyan" + Math.random());
        }}
      >
        Change me
      </button>
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        Add Age
      </button>
    </div>
  );
}
