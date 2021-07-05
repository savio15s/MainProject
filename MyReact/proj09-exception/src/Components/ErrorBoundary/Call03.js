import React from "react";
import BuggyCounter from "./BuggyCounter";
import MyErrorBoundary from "./MyErrorBoundary";

export default function Call03() {

  let refreshPage = () => alert("data");

  return (
    <div>
      <MyErrorBoundary>
        <BuggyCounter />
      </MyErrorBoundary>
      <hr />
      <button onClick={refreshPage}>Refresh Page</button>
    </div>
  );
}
   