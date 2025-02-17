import React from "react";
import ReactDOM from "react-dom/client";

const imageName = require("./images/marilynMonroe.jpg");
const ImageComponent = () => {
  return (
    <div id="image">
      <img src={imageName} alt="Marilyn Monroe" />
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search.."></input>
    </div>
  );
};

const userImage = require('./images/userIcon.png')
const UserIcon = () => {
    return (
        <div id="usericon">
            <img src= {userImage} alt ="User Icon" />
        </div>
    );
}

const FinalComponent = () => {
  return (
    <div className="main">
      {<ImageComponent />}
      {<SearchBar />}
      {UserIcon()}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FinalComponent />);
