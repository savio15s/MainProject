import React from "react";
import ErrorComponent from "../ErrorComponent";
import ReactDOM from 'react-dom'

export default function Greeting({ subject }) {
  try {
    return <div>Hello {subject.toUpperCase()}</div>;
  } catch (error) {
    console.log("ERROR GR==" + error);
    return <ErrorComponent description={error} />;
  }
}
   