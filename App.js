import React from "react";
import ReactDOM from "react-DOM/client";

const heading = <h1>This is a main heading</h1>;

const MultipleHeadings = () => {
  return (
    <div>
      {heading}
      <ol type="I"> <h1>These are some items :</h1>
      <li><h2>this is one </h2></li>
      <li><h2>this is two</h2></li>
      </ol>
    </div>
  );
}
  const root = ReactDOM.createRoot(document.getElementById("root"));
  //passing a react element inside the root
  //async defer
  root.render(<MultipleHeadings></MultipleHeadings>);