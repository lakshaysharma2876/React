import React from "react";
import ReactDOM from "react-DOM/client";

const heading = <h1>This is a main heading</h1>;

const MultipleHeadings = () => {
  return (
    <>
      <h1>Hello word</h1>
      <>
      new word
      </>
    </>
  )
}
  const root = ReactDOM.createRoot(document.getElementById("root"));
  //passing a react element inside the root
  //async defer
  root.render(<MultipleHeadings></MultipleHeadings>);