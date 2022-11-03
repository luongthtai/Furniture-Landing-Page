import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../layouts/Footer/Footer";
import styles from "./Contact.module.scss"

export default function Contact() {
  return (
    <>
      <Nav backgroundColor="#0d1b39" position="inherit" />
      <div id={styles.contactPage}>contact</div>
      <Footer />
    </>
  );
}
