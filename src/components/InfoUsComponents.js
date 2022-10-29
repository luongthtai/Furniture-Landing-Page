import React from "react";
import styles from "./InfoUsComponents.module.scss"

export default function InfoUsComponents(props) {
  return (
    <>
        <div className={styles.infoUsItems}>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <button>More Info</button>
        </div>
    </>
  );
}
