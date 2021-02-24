import React from "react";
import Background from "../components/Background"
import HomeNav from "../components/HomeNav";
import AboutDP from "../components/AboutDP";
import AboutUser from "../components/AboutUser";
// import './about.css'

function About() {
  return (
    <div className="about">
      <Background />
      <HomeNav />
      <AboutUser />
      <AboutDP />
    </div>
  );
}
export default About;
