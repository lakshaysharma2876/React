import React from "react";
import ReactDOM from "react-dom/client";

const MyList = <h1 id="Title" key="first">My favourite bikes :</h1>;


const HeaderComponent = () => {
  return (
    <div>
    {MyList},
    <ul>
      <li> Ninja H2</li>
      <li>Royal Enfield GT Continental 650</li>
      <li> Husqvarna Vitpilen 401</li>
    </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(HeaderComponent ());
