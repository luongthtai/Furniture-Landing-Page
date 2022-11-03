import React, { useEffect, useState } from "react";
import InfoUsComponets from "../../../components/InfoUsComponents";
import styles from "./InfoUs.module.scss";

export default function InfoUs() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function getApi() {
      await fetch("http://localhost:3000/content")
        .then((response) => response.json())
        .then((data) => setContent(data));
    }

    getApi()
  }, []);

  return (
    <section id={styles.infoUs}>
      <div id={styles.title}>
        <h2>Why Choosing Us</h2>
      </div>

      {content.map((item) => (
        <InfoUsComponets
          key={item.id}
          title={item.title}
          content={item.content}
        />
      ))}
    </section>
  );
}
