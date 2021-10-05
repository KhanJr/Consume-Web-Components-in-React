import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

const MyCounter = lazy(() => import("./react-component"));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MyCounter name="Rizwan Khan" />
      </Suspense>
    </div>
  );
}
ReactDOM.render(<MyComponent />, document.getElementById("root"));
