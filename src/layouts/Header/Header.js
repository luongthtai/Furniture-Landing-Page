import React from "react";
import Nav from "../../components/Nav";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header>
      <Nav />
      <div id={styles.header}>
        <div>
          <h2>Make Your Interior More Minimalistic & Modern</h2>
          <p>
            Turn your room with panto into a lot more minimalist and modern with
            ease and speed
          </p>
          <form>
            <input type="text" placeholder="Search furiture" required />
            <button type="button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
