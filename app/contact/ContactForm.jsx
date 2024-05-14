"use client";

import React, { use, useState } from "react";
import "./ContactForm.css"; // Make sure to create a corresponding CSS file for styling
import useStore from "../store.jsx";
const ContactForm = (props) => {
  const showContactForm = useStore((state) => state?.showContactForm);
  const closeContactForm = useStore((state) => state?.closeContactForm);

  console.log(closeContactForm, "openContactForm")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDetails: "",
    budget: 300000,
    budgetUnknown: false,
  });

  const handleInputChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div
      className="form-container"
      style={showContactForm ? { display: "block" } : { display: "none" }}
    >
      <button  onClick={closeContactForm} className="close-btn button">
        X
      </button>

      <h1 id="heading-contact">Let&apos;s start something amazing together</h1>
      <form >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <textarea
          name="projectDetails"
          placeholder="Tell me more about the project."
          value={formData.projectDetails}
          onChange={handleInputChange}
        />
        <a href="mailto:shivanshrawat587@gmail.com">
        <button className="button" target="_blank">Submit</button></a>
      </form>
    </div>
  );
};

export default ContactForm;
