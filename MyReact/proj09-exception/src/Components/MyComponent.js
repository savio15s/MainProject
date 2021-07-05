import React, { useState } from "react";
import ErrorComponent from "./ErrorComponent";

export default function MyComponent() {
  var [numerator, setNumerator] = useState("");
  var [denominator, setDenominator] = useState("");
  var [executionOutput, setExecutionOutput] = useState("");
  var [hasError, setHasError] = useState(false);
  var [errorMessage, setErrorMessage] = useState(false);

  const updateValue = (e) => {
    const { name, value, id } = e.target;
    console.log(name, value);
    if (id === "numerator") {
      setNumerator(value);
    } else {
      setDenominator(value);
    }   
  };

  function getDivision() {
    try {
      if (denominator === "0") {
        setErrorMessage("Division By 0");
        throw Error("Division By 0");
      }
      setHasError(false);
      setErrorMessage("");
      setExecutionOutput(numerator / denominator);
    } catch {
      setHasError(true);
    }
  }

  return (
    <div>
      {!hasError && (
        <section className="App">
          <div>
            <div>
              <label>First Value: </label>
              <input
                id="numerator"
                type="text"
                value={numerator}
                onChange={updateValue}
              />
            </div>
            <div>
              <label>Second Value: </label>
              <input
                id="denominator"
                type="text"
                value={denominator}
                onChange={updateValue}
              />
            </div>
            <div>Output: {executionOutput}</div>
            <input type="button" onClick={getDivision} value="Divide Values" />
          </div>
        </section>
      )}
      {hasError && <ErrorComponent description={errorMessage} />}
    </div>
  );
}
