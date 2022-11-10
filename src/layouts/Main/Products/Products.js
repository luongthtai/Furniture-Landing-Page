import React, { useEffect, useState } from "react";
import ProductItems from "../../../components/ProductItem/ProductItems.js";
import styles from "./Products.module.scss";

export default function Products() {
  const [data, setData] = useState([]);
  const [productItems, setProductItems] = useState([]);
  const [select, setSelect] = useState(1);

  useEffect(() => {
    fetch("https://fe21-db.herokuapp.com/furniture")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    setProductItems(data.filter((item) => item.categories === 1));
  }, [data]);

  const selected = (value) => {
    setSelect(value);
    setProductItems(data.filter((item) => item.categories === value));
  };

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

      {/* <div
        id={styles.listProduct}
        style={{
          gridTemplateColumns: "repeat(" + productItems.length + ", 286px)",
        }}
      >
        {productItems.map((item) => (
          <ProductItems
            key={item._id}
            id={item._id}
            name={item.name}
            type={item.categories}
            price={item.price}
            imgProduct={item.img}
            item={item}
            status={item.__v}
          />
        ))}
      </div> */}

      <ProductItems product={productItems} />

      {/* <span id={styles.next} onClick={handleClickNext}>
        <i className="fa-solid fa-arrow-right"></i>
      </span>
      <span id={styles.prev} onClick={handleClickPrev}>
        <i className="fa-solid fa-arrow-left"></i>
      </span> */}

      <button type="button" id={styles.viewAll}>
        View All
      </button>
    </section>
  );
}
