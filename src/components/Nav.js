import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";
import logo from "../assets/images/Panto.png";

export default function Nav(props) {
  const numberProduct = useSelector((state) => state.count.bought);
  const activeStyle = {
    textDecoration: "underline",
  };

  return (
    <div
      id={styles.navigation}
      style={{
        backgroundColor: props.backgroundColor,
        position: props.position,
      }}
    >
      <Link to="/">
        <img id={styles.logo} src={logo} alt="logo" />
      </Link>

      <div id={styles.menu}>
        <i className="fa-solid fa-bars"></i>
      </div>

      <ul id={styles.navBar}>
        <li id={styles.dropDown}>
          <span>Furniture</span> <i className="fa-solid fa-chevron-down"></i>
        </li>
        <li>
          <NavLink
            to="/shop"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)} >About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Contact</NavLink>
        </li>
      </ul>

      <div id={styles.bag}>
        <Link to="/cart">
          <i className="fa-solid fa-bag-shopping"></i>
        </Link>
        <p
          id={styles.productNumber}
          style={{ backgroundColor: props.colorNumber }}
        >
          {numberProduct.length}
        </p>
      </div>
    </div>
  );
}
