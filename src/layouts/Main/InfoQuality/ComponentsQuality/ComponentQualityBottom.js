import React from "react";
import QualityItems from "../../../../components/QualityItems";
import demo2 from "../../../../assets/images/demo2.png";
import demo3 from "../../../../assets/images/demo3.png";
import demo4 from "../../../../assets/images/demo4.png";
import styles from "./ComponentQualityBottom.module.scss";

export default function ComponentQualityBottom() {
  const data = {
    title: "MATERIALS",
    forUs: "We Provide You The Best Experience",
    content:
      "You don't have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials",
  };

  return (
    <div id={styles.componentQualityBottom}>
      <QualityItems
        title={data.title}
        forUs={data.forUs}
        content={data.content}
      />

      <div id={styles.imgDemo}>
        <img src={demo2} alt="demo2" />
        <img src={demo3} alt="demo3" />
        <img src={demo4} alt="demo4" />
      </div>
    </div>
  );
}
