import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

export default function Nav() {
  const productNumber = useSelector(state => state.count.countProduct)

  return (
    <div id={styles.navigation}>
      <Link to="/">
        <h1 id={styles.logo}>Panto</h1>
      </Link>

      <ul id={styles.navBar}>
        <li id={styles.dropDown}><span>Furniture</span> <i className="fa-solid fa-chevron-down"></i></li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div id={styles.bag}>
        <i className="fa-solid fa-bag-shopping"></i>
        <p id={styles.productNumber}>{productNumber}</p>
      </div>
    </div>
  );
}
