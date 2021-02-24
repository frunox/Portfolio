import React from "react";
import HomeNav from '../components/HomeNav'
import Background from '../components/Background'
import Intro from '../components/Intro'
import PortCards from '../components/PortCards'

function Home() {
  console.log('HOME start');

  return (
    <div>
      <Background />
      <HomeNav />
      <Intro />
      <PortCards />
    </div>
  );
}

export default Home;
