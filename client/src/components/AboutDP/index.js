import React from "react";
import { Fragment } from "react";
import "./AboutDP.css";


function AboutDP() {

  return (

    <div className="aboutContainer">
      <div className="container">
        <h3 className="title">About Dynamic Portfolio</h3>

        <p>
          My portfolio is built using <a className='links' href="https://github.com/frunox/dynamic-portfolio" rel="noopener noreferrer" target="_blank">Dynamic Portfolio</a>, an app that creates a portfolio from a developer's GitHub projects.  Select which projects to feature with a few clicks!  Originally conceived as <a className='links' href="https://github.com/frunox/jtsy" rel="noopener noreferrer" target="_blank">jtsy Portfolio</a> by <a className='links' href="https://www.linkedin.com/in/shawnhayes70/" rel="noopener noreferrer" target="_blank">Shawn Hayes</a> and co-developed with <a className='links' href="https://www.linkedin.com/in/tomvandeusen/" rel="noopener noreferrer" target="_blank">Tom Van Deusen</a> and <a className='links' href="https://www.linkedin.com/in/yeng-vang-b510a71a3/" rel="noopener noreferrer" target="_blank">Yeng Vang</a>, I've taken the template, made it more performant, and customized it to show my projects with my styling.
      </p>


      </div>
    </div >
  );
}
export default AboutDP;
