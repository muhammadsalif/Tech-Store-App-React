import React from "react";
import Contact from "./../components/ContactPage/Contact";
import Hero from "../components/Hero";
import contactBcg from "../images/contactBcg.jpeg";
function ContactPage() {
  return (
    <>
      <Hero img={contactBcg}></Hero>
      <Contact></Contact>
    </>
  );
}

export default ContactPage;
