import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import defaultBcg from "../images/defaultBcg.jpeg";
import { FaAngleLeft } from "react-icons/fa";
function DefaultPage() {
  return (
    <Hero maxHeight={true} title={404} img={defaultBcg}>
      <h2 className="text-uppercase">page not found</h2>

      <Link
        to="/"
        className="main-link"
        style={{ marginTop: "2rem", paddingLeft: "2.8rem" }}
      >
        <FaAngleLeft
          style={{
            fontSize: "1.4rem",
            marginRight: "0.5rem",
            position: "absolute",
            left: "33rem",
          }}
        ></FaAngleLeft>
        Back to home page
      </Link>
    </Hero>
  );
}

export default DefaultPage;
