import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getimageurl } from "../../utils.js";

function Navbar() {
  const [menuopen, setmenuopen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menubtn}
          src={
            menuopen // if the menu open is true then show the close icon else show the menu icon
              ? getimageurl("nav/closeIcon.png")
              : getimageurl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setmenuopen(!menuopen)}
        />
        <ul
          className={`${styles.menuitems} ${menuopen && styles.menuopen}`}
          onClick={() => setmenuopen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
