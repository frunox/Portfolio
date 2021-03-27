import React, { useContext } from 'react';
import DevDataContext from "../../contexts/DevDataContext";
// import SetupContext from "../../contexts/SetupContext";
import "./HomeNav.css";

const HomeNav = () => {
  const devCtx = useContext(DevDataContext);
  let userName = `${devCtx.state.fname} ${devCtx.state.lname}`
  // const setupCtx = useContext(SetupContext);
  // console.log('HOMENAV some devData: ', devCtx.state.fname)
  // console.log('HOMENAV setupCtx', setupCtx);

  // if (localStorage.getItem("jtsy-login") === "true") {
  //   loggedIn = true
  // }
  let content = (
    <header className='homenav-header'>
      <h1 className="user-name">{userName}</h1>
      <input type='checkbox' id="navbar-toggle" className="navbar-toggle"></input>
      <nav className='navbar-nav'>
        <ul className='navbar-ul'>
          <li className='navbar-li>'><a href='/'>Home</a></li>
          <li className='navbar-li>'><a href='/about'>About</a></li>
          <li className='navbar-li>'><a href='/contact'>Contact</a></li>
          <li className='navbar-li>'><a href='/developer'>Developer</a></li>
        </ul>
      </nav>
      <label for='navbar-toggle' className='navbar-toggle-label'>
        <span></span>
      </label>
    </header >
  )
  return content
}

export default HomeNav;