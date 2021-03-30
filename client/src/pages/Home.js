import React from "react";
import HomeNav from '../components/HomeNav'
import Intro from '../components/Intro'
import PortCards from '../components/PortCards'

function Home() {
  console.log('HOME start');

  return (
    <div>
      <HomeNav />
      <Intro />
      <PortCards />
    </div>
  );
}

export default Home;
