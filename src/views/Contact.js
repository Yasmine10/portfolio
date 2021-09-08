import React, { Component } from "react";
import Image from "../assets/images/female_reading_mail.png";

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="border-pink">
        <div className="container py-5">
          <div className="d-md-flex align-items-md-center">
            <div className="flex-md-shrink-0 text-center text-md-start mb-5 mb-md-0">
              <img
                src={Image}
                alt="female reading mail"
                className="contact-image me-xl-5"
              />
            </div>
            <div className="flex-md-grow-1 ms-lg-5 ms-md-3 p-3 p-md-0">
              <form>
                <h4 className="page-title mb-5 text-center text-md-start">
                  <span>Contact Me</span>
                </h4>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    placeholder="Full name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="E-mail"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
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
