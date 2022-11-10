import React from "react";
import styles from "./InfoUs.module.scss";

export default function InfoUs() {
  const data = [
    {
      id: 1,
      title: "Luxury facilities",
      content:
        "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.",
    },
    {
      id: 2,
      title: "Affordable Price",
      content:
        "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.",
    },
    {
      id: 3,
      title: "Many Choices",
      content:
        "We provide many unique work space choices so that you can choose the workspace to your liking.",
    },
  ];

  return (
    <section id={styles.infoUs}>
      <div id={styles.title}>
        <h2>Why Choosing Us</h2>
      </div>

      {data.map((item) => (
        <div className={styles.infoUsItems} key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          <button>More Info</button>
        </div>
      ))}
    </section>
  );
}
