import React from "react";
import styles from "./ClientItems.module.scss";

export default function ClientItems({
  clientName,
  from,
  img,
  cmt,
  background,
}) {

  return (
    <div className={styles.clientItems}>
      <img id={styles.background} src={background[0]} alt="" />

      <div className={styles.clientContent}>
        <img className={styles.avarta} src={img} alt={clientName} />
        <div className={styles.client}>
          <h5>{clientName}</h5>
          <p id={styles.name}>{from}</p>
          <p id={styles.cmt}>{cmt}</p>
        </div>
        <div className={styles.vote}>xxxxx</div>
      </div>
    </div>
  );
}
