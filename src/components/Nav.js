import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
import logo from "../assets/images/Panto.png"

export default function Nav(props) {
  const productNumber = useSelector(state => state.count.countProduct)

  return (
    <div id={styles.navigation} style={{backgroundColor: props.backgroundColor, position: props.position}}>
      <Link to="/">
        <img id={styles.logo} src={logo} alt="logo"/>
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
        <Link to="/cart"><i className="fa-solid fa-bag-shopping"></i></Link>
        <p id={styles.productNumber} style={{backgroundColor: props.colorNumber}}>{productNumber}</p>
      </div>
    </div>
  );
}
