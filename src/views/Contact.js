import React from "react";
import Image from "../assets/images/female_sending_letter.svg";
import { useForm } from "react-hook-form";
import * as emailjs from "emailjs-com";

require("dotenv").config();

function Contact() {
  const serviceId = "service_7dxh8wv";
  const templateId = "template_dlj1cmc";
  const userId = "user_76gRUHgTcOql8iQ30wEXV";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);

    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
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
            <div
              class="alert alert-success alert-dismissible fade show mt-4"
              role="alert"
            >
              <strong>Message send successfully!</strong> I will get back to you
              as soon as possible.
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
            <div
              class="alert alert-danger alert-dismissible fade show mt-4"
              role="alert"
            >
              <strong>Something went wrong, try again later!</strong>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
