import React from "react";
import styles from "./ComponentQualityTop.module.scss";
import demo1 from "../../../../assets/images/demo1.png";
import QualityItems from "../../../../components/QualityItems";

export default function ComponentQualityTop() {
  const data = {
    title: "EXPERIENCES",
    forUs: "We Provide You The Best Experience",
    content:
      "You don't have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials",
  };
  return (
    <div id={styles.componentQualityTop}>
      <img src={demo1} alt="demo" />
      <QualityItems
        title={data.title}
        forUs={data.forUs}
        content={data.content}
      />
    </div>
  );
}
