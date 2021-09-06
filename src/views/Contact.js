import React, { Component } from "react";
import Image from "../assets/images/female_reading_mail.png";

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="contact-wrapper">
        <div className="container py-5">
          <div className="row">
            <div className="image-wrapper col-6">
              <img src={Image} alt="female reading mail" width="400" />
            </div>
            <div className="contact-form-wrapper col-6">
              <h4 className="page-title mb-4">
                <span>Contact Me</span>
              </h4>
              <form>
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
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button className="btn" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
