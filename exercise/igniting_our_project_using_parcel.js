import React from "react";
import ReactDOM from "react-DOM/client";

let parent = document.getElementById("first");
console.log(parent.innerHTML);

let heading = document.createElement("h3");
heading.textContent = "Hello World from JS DOM";
console.log(heading.innerHTML);

parent.appendChild(heading);
