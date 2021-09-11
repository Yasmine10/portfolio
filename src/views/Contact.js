import React, { Component } from "react";
import Image from "../assets/images/female_sending_letter.svg";

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="border-pink py-md-5 px-3">
        <div className="container py-xl-5 pb-3">
          <div className="d-md-flex align-items-md-center">
            <div className="flex-md-shrink-0 text-center text-md-start mb-5 mb-md-0">
              <img
                src={Image}
                alt="female reading mail"
                className="contact-image me-xl-5 d-none d-md-block"
              />
            </div>
            <div className="flex-md-grow-1 ms-lg-5 ms-md-3 p-md-0">
              <form>
                <h4 className="page-title mb-5 text-center text-md-start">
                  <span>Contact Me</span>
                </h4>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control border-dark"
                    id="fullname"
                    placeholder="Full name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control border-dark"
                    id="email"
                    placeholder="E-mail"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control border-dark"
                    id="message"
                    rows="6"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="text-center text-md-start">
                  <button className="btn" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
