import React from "react";

const ErrorComponent = (props) => {
  return (
    <div role="alert"> 
      <p>Something went wrong:</p>
      <pre style={{color: 'red'}}>Error Occured - {props.description} </pre>
    </div>
  )
};

export default ErrorComponent;   