import React from "react";
import styles from "./ProductItems.module.scss";

export default function ProductItems(props) {
  return (
    <div className={styles.productItems}>
      <img src={props.imgProduct} alt={props.name} />

      <div className={styles.infProducts}>
        <div className={styles.infPdtItems}>
          <p className={styles.typeProducts}>{props.type}</p>
          <h4 className={styles.nameProducts}>{props.name}</h4>
          <div className={styles.vote}>xxxxx</div>
        </div>

        <div className={styles.price}>
          <p className={styles.price}>{props.price}</p>
          <button type="button">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
