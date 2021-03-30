import React, { useContext } from "react";
import DevDataContext from "../../contexts/DevDataContext";
import './Intro.css'

const Intro = () => {
  const devCtx = useContext(DevDataContext);
  // console.log('Intro: ', devCtx.state.fname, devCtx.state.lname)
  return (
    <div className='intro'>
      <div className="jumbo">
        <h1 className="greeting">Welcome to my portfolio page</h1>
        <h2 className='tagLine'>
          A web developer. Design, management and planning experience.  Bringing projects to life!
        </h2>
      </div>
    </div>
  )
};

export default Intro;