import React, { useEffect, useState } from "react";
import ProductItems from "../../../components/ProductItems";
import styles from "./Products.module.scss";

export default function Products() {
  const [productItems, setProductItems] = useState([]);
  const [select, setSelect] = useState(1);

  const selected = (value) => {
    setSelect(value);
  };

  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((response) => response.json())
      .then((data) => setProductItems(data))
  }, []);

  return (
    <section id={styles.products}>
      <h2>Best Selling Product</h2>

      <div id={styles.selecType}>
        <div
          className={styles.typeProduct}
          id={select === 1 ? styles.selected : ""}
          onClick={() => selected(1)}
        >
          Chair
        </div>
        <div
          className={styles.typeProduct}
          id={select === 2 ? styles.selected : ""}
          onClick={() => selected(2)}
        >
          Beds
        </div>
        <div
          className={styles.typeProduct}
          id={select === 3 ? styles.selected : ""}
          onClick={() => selected(3)}
        >
          Sofa
        </div>
        <div
          className={styles.typeProduct}
          id={select === 4 ? styles.selected : ""}
          onClick={() => selected(4)}
        >
          Lamp
        </div>
      </div>

      <div id={styles.listProduct}>
        {productItems.map((item) => (
          <ProductItems
            key={item.id}
            id={item.id}
            name={item.nameProduct}
            type={item.typeProduct}
            price={item.price}
            imgProduct={item.image}
          />
        ))}

        <span id={styles.next}>
          <i className="fa-solid fa-arrow-right"></i>
        </span>
        <span id={styles.prev}>
          <i className="fa-solid fa-arrow-left"></i>
        </span>
      </div>

      <button type="button" id={styles.viewAll}>
        View All
      </button>
    </section>
  );
}
