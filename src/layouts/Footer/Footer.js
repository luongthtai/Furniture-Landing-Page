import styles from "./Footer.module.scss";
import React from "react";
import FooterItems from "../../components/FooterItems";

export default function Footer() {
  return (
    <footer>
      <div id={styles.page}>
        <h1>Panto</h1>
        <p>
          The advantage of hiring a workspace with us is that givees you
          comfortable service and all-around facilities.
        </p>
      </div>
      <FooterItems />
    </footer>
  );
}
