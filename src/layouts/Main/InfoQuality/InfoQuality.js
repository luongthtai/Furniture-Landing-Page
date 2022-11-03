import React from "react";
import ComponentQualityBottom from "./ComponentsQuality/ComponentQualityBottom";
import ComponentQualityTop from "./ComponentsQuality/ComponentQualityTop";
import styles from "./InfoQuality.module.scss"

export default function InfoQuality() {
  return (
    <section id={styles.infoQuality}>
      <ComponentQualityTop />
      <ComponentQualityBottom />
    </section>
  );
}
