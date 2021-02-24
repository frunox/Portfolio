import React from "react";
import { Jumbotron } from "../components/JumboTron";
import PortCards from "../components/PortCards/portCards";
import HomeNav from "../components/HomeNav";
import "./home.css";

function Home() {
  console.log('HOME start');

  return (
    <div className='home'>
      <HomeNav />
      <Jumbotron />
      <PortCards className="cards"></PortCards>
      <main className='home'>
        <section className='glass'>
        </section>
      </main>
      <div className='circle1'></div>
      <div className='circle3'></div>
      <img className='bird' src="https://i.ibb.co/Px6x96w/purepng-com-colorful-hummingbird.png" alt="hummingbird" border="0" />
      <img className='branch' src="https://i.ibb.co/8bZ5rh1/pink-blossom.png" alt="pink-blossom" border="0" />
      <img className='tree' src="https://i.ibb.co/pJmy6DM/chestnut-tree.png" alt="chestnut-tree" border="0"></img>
      <img className='raven' src="https://i.ibb.co/rxhB7xS/Raven2.png" alt="Raven2" border="0"></img>

    </div>
  );
}

export default Home;
