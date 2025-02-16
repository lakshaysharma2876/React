import React from "react";
import ReactDOM from "react-DOM/client";

const heading = React.createElement(
    "h1",
    {
      id: "title1",
    },
    "Heading 1"
  );
  const heading2 = React.createElement(
    "h2",
    {
      id: "title2",
    },
    "Heading 2"
  );
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading2]
  );
  console.log(heading);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  //passing a react element inside the root
  //async defer
  root.render(container);