import React from "react";
import { USER_PROFILE_CDN } from "../config";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    //this.state is just a JavaScript object
    this.state = {
      userInfo: {
        name: null,
        userID: null,
      },
    };

    console.log("constuctor executed first");
  }

  async componentDidMount() {
    console.log("component mounted");

    const data = await fetch(USER_PROFILE_CDN);
    const dataJSON = await data.json();

    console.log(dataJSON);

    this.setState({
      userInfo: dataJSON,
    });

    this.timer = setInterval(()=> {
        console.log("still mounted");
    },1000)
  }

  componentDidUpdate() {
    console.log("this is re-rendered everytime a component's state/props changes")
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component Unmounted");
  }

  render() {
    console.log("this is the render function")
    //have to return JSX from render() method
    return (
      <div className="aboutUs">
        <h1>This is the user Page</h1>
        <img src={this.state.userInfo.avatar_url}></img>
        <h2>User name : {this.state.userInfo.name}</h2>
        <h2>UserID : {this.state.userInfo.id}</h2>
        </div>
    );
  }
}

export default UserProfile;
