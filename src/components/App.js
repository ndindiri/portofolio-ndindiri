import React, { Component } from "react";
import Bio from "./Bio";
// import Projects from "./Projects";
import Projects2 from "./Projects2";
import SocialProfiles from "./SocialProfiles";
import profile from "../assets/profile.jpg";
import Title from "./Title";
// import Jokes from "./Jokes";
// import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <img src={profile} alt="My-profile" className="profile" />
        <h1>Hello!</h1>
        <p>My name is Ndindiri.</p>
        <Title />
        <p>I'm always looking forward to working on meaningful projects.</p>
        <Bio />
        {/* <Projects /> */}
        <Projects2 />
        <hr />
        <SocialProfiles />
        {/* <hr />
        <Jokes /> */}
      </div>
    );
  }
}
export default App;
