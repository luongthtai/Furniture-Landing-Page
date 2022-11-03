import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../layouts/Footer/Footer";
import styles from "./Shop.module.scss"

export default function Shop() {
  return (
    <>
      <Nav backgroundColor="#0d1b39" position="inherit"/>
      <div id={styles.shopPage}>
        shopPage
      </div>
      <Footer />
    </>
  );
}
