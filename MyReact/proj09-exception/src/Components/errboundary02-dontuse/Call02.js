import React from "react";
import Drink from "./Drink";
import {ErrorBoundary} from 'react-error-boundary'
import ErrorComponent from "../ErrorComponent";

export default function Call02() {

  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        <Drink/>
      </ErrorBoundary>
    </div>
  );
}
  