import React from "react";
import { useDispatch } from "react-redux";
import { countProductPlus } from "../redux/actition/countProduct";
import styles from "./ProductItems.module.scss";

export default function ProductItems(props) {
  const dispatch = useDispatch()

  return (
    <div className={styles.productItems}>
      <img src={props.imgProduct} alt={props.name} />

      <div className={styles.infProducts}>
        <div className={styles.infPdtItems}>
          <p className={styles.typeProducts}>{props.type}</p>
          <h4 className={styles.nameProducts}>{props.name}</h4>
          <div className={styles.vote}>xxxxx</div>
        </div>

        <div className={styles.buy}>
          <p className={styles.price}><i className="fa-solid fa-dollar-sign"></i>{props.price}</p>
          <button type="button">
            <i className="fa-solid fa-plus" onClick={() =>{ dispatch(countProductPlus(props.id))}}></i>
          </button>
        </div>
      </div>
    </div>
  );
}
