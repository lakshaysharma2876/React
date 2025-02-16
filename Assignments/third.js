import React from "react";
import ReactDOM from "react-dom/client";

const myList = React.createElement(
  "ol",
  {
    id: "bikes",
  },
  "my favourite 3 bikes: "
);

const listedItems1 = React.createElement(
  "li",
  {
    id: "one",
  },
  "Husqvarna Vitpilen 401"
);

const listedItems2 = React.createElement(
  "li",
  {
    id: "two",
  },
  "Ninja HX"
);

const listedItems3 = React.createElement(
  "li",
  {
    id: "three",
  },
  "Royal Enflied Continental GT 650"
);

const listed_Items = React.createElement(
  "div",
  {
    id: "sdiv",
  },
  myList,
  listedItems1,
  listedItems2,
  listedItems3
);

//console.log(listed_Items);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(listed_Items);
