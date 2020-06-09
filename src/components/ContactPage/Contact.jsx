import React from "react";
import Title from "../../components/Title";

function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3 ">
          <Title title="contact us"></Title>

          <form className="my-5">
            {/* first */}
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="name"
                className="form-control"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="email@email.com"
                className="form-control"
              />
            </div>

            {/* subject */}
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="subject"
                className="form-control"
              />
            </div>
            {/* text area */}
            <div className="form">
              <textarea
                name="message"
                className="form-control"
                rows="10"
                placeholder="hello there buddy"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
