import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

// const MyCounter = lazy(() => import("./react-component"));
const App = lazy(() => import("./App"));
function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <MyCounter name="Rizwan Khan" /> */}
        <App />
      </Suspense>
    </div>
  );
}
ReactDOM.render(<MyComponent />, document.getElementById("root"));
