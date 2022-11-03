import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../layouts/Footer/Footer";
import styles from "./About.module.scss"

export default function About() {
  return (
    <>
      <Nav backgroundColor="#0d1b39" position="inherit"/>
      <section id={styles.aboutPage}>
        abount
      </section>
      <Footer />
    </>
  );
}
