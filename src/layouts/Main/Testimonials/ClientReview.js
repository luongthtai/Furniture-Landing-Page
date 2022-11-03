import React, { useEffect, useState } from "react";
import ClientItems from "../../../components/ClientItems";
import styles from "./ClientReview.module.scss";
import client1 from "../../../assets/images/client1.png";
import client2 from "../../../assets/images/client2.png";
import client3 from "../../../assets/images/client3.png";

export default function ClientReview() {
  const [client, setClient] = useState([]);
  const background = [client1, client2, client3];

  useEffect(() => {
    fetch("http://localhost:3000/client")
      .then((response) => response.json())
      .then((data) => setClient(data));
  }, []);

  return (
    <div id={styles.clientReview}>
      {client.map((item) => (
        <ClientItems
          key={item.id}
          clientName={item.userName}
          from={item.from}
          img={item.img}
          cmt={item.comment}
          background={background}
        />
      ))}

      <span id={styles.next}>
        <i className="fa-solid fa-arrow-right"></i>
      </span>
      <span id={styles.prev}>
        <i className="fa-solid fa-arrow-left"></i>
      </span>
    </div>
  );
}
