import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";

function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              alt="About company"
              className="img-fluid img-thumbnail "
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us"></Title>
            <p className="text-muted text-lead my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem nemo consectetur nostrum, animi earum quos dolorum
              laboriosam id officiis incidunt?
            </p>
            <p className="text-muted text-lead my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem nemo consectetur nostrum, animi earum quos dolorum
              laboriosam id officiis incidunt?
            </p>
            <button className="main-link mt-2"> more info</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
