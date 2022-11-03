import styles from "./Footer.module.scss";
import React from "react";
import logo from "../../assets/images/Logo.png";

export default function Footer() {
  return (
    <footer>
      <div id={styles.page}>
        <img src={logo} alt="logo" />
        <p>
          The advantage of hiring a workspace with us is that givees you
          comfortable service and all-around facilities.
        </p>
      </div>

      <div className={styles.footer__inf}>
        <div className={styles.footer__inf_items}>
          <h4>Services</h4>
          <div className={styles.items_content}>
            <p>Email Marketing</p>
            <p>Campaigns</p>
            <p>Branding</p>
          </div>
        </div>

        <div className={styles.footer__inf_items}>
          <h4>Furniture</h4>
          <div className={styles.items_content}>
            <p>Beds</p>
            <p>Chair</p>
            <p>All</p>
          </div>
        </div>

        <div className={styles.footer__inf_items}>
          <h4>Services</h4>
          <div className={styles.items_content}>
            <p><i className="fa-brands fa-facebook-f"></i>Facebook</p>
            <p><i className="fa-brands fa-twitter"></i>Twitter</p>
            <p><i className="fa-brands fa-instagram"></i>Instagram</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
