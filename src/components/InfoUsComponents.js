import React from "react";
import styles from "./InfoUsComponents.module.scss"

export default function InfoUsComponents(props) {
  return (
    <>
        <div className={styles.infoUsItems}>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <button>More Info</button>
        </div>
    </>
  );
}
