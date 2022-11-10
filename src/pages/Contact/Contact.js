import React, { useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../layouts/Footer/Footer";
import styles from "./Contact.module.scss";

export default function Contact() {
  const [client, setClient] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: 0,
    message: "",
  });

  const handleChange = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(client);
  };

  return (
    <>
      <Nav backgroundColor="#0d1b39" position="inherit" />
      <section id={styles.contactPage}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>Contact Us</h2>

          <label>
            YOUR NAME:
            <div id={styles.name}>
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                required
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                required
              />
            </div>
          </label>

          <label>
            EMAIL ADDRESS:
            <input
              name="email"
              type="email"
              placeholder="Eg.example@gmail.com"
              onChange={handleChange}
              required
            />
          </label>

          <label>
            PHONE NUMBER:
            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />
          </label>

          <label>
            MESSAGE:
            <textarea
              name="message"
              placeholder="Please enter your comments..."
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </section>
      <Footer />
    </>
  );
}
