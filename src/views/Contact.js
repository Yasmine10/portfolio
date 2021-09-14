import React, { useState, useEffect } from "react";
import Image from "../assets/images/female_sending_letter.svg";
import { useForm } from "react-hook-form";
import * as emailjs from "emailjs-com";

function Contact() {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userId = process.env.REACT_APP_EMAILJS_USER_ID;

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const SuccessAlert = () => {
    useEffect(() => {
      const timeId = setTimeout(() => {
        setShowSuccessAlert(false);
      }, 30000);

      return () => {
        clearTimeout(timeId);
      };
    });

    return (
      <div className="mt-4">
        <p>
          <strong>
            Thank you for your message! I will get back to you as soon as
            possible!
          </strong>
        </p>
      </div>
    );
  };

  const ErrorAlert = () => {
    useEffect(() => {
      const timeId = setTimeout(() => {
        setShowErrorAlert(false);
      }, 30000);

      return () => {
        clearTimeout(timeId);
      };
    });

    return (
      <div className="mt-4">
        <p>
          <strong>Something went wrong, try again later.</strong>
        </p>
      </div>
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (e) => {
    e.preventDefault();

    setShowSuccessAlert(false);
    setShowErrorAlert(false);

    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
      (result) => {
        console.log(result.text);
        return setShowSuccessAlert(true);
      },
      (error) => {
        console.log(error.text);
        return setShowErrorAlert(true);
      }
    );

    reset(register);
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <h4 className="page-title mb-5 text-center text-md-start">
                <span>Contact Me</span>
              </h4>
              <div className="mb-3">
                <input
                  name="fullname"
                  type="text"
                  className={`form-control border-dark ${
                    errors.fullname ? "is-invalid" : ""
                  }`}
                  id="fullname"
                  placeholder="Full name"
                  {...register("fullname", {
                    required: "Full name is required",
                  })}
                />

                <div className="invalid-feedback">
                  {errors.fullname && errors.fullname.message}
                </div>
              </div>
              <div className="mb-3">
                <input
                  name="email"
                  className={`form-control border-dark ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  id="email"
                  placeholder="E-mail"
                  {...register("email", {
                    required: "E-mail is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "This is not a valid e-mail",
                    },
                  })}
                />
                <div className="invalid-feedback">
                  {errors.email && errors.email.message}
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  className={`form-control border-dark ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  id="message"
                  rows="6"
                  placeholder="Message"
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                <div className="invalid-feedback">
                  {errors.message && errors.message.message}
                </div>
              </div>
              <div className="text-center text-md-start">
                <button className="btn">Send</button>
              </div>
            </form>
            {showSuccessAlert ? <SuccessAlert /> : null}
            {showErrorAlert ? <ErrorAlert /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
