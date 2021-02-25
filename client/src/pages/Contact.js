import React from "react";
import HomeNav from "../components/HomeNav";
import ContactComp from "../components/Contact";
import Background from "../components/Background"
// import './contact.css'

function Contact() {
  return (
    <div>
      <Background />
      <HomeNav />
      <ContactComp />
    </div>
  );
}

export default Contact;
