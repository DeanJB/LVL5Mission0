import React from "react";
import styles from "./Nav.module.css";

function Nav() {
      return (
            <div className={styles.navBar}>
                  <div className={styles.logoLeft}>
                        <img src="src\assets\MarketingAssociationNZ.png" alt="logo"></img>
                  </div>
                  <ul className={styles.navList}>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                  </ul>

                  <div className={styles.navRight}>
                        <button>Login</button>
                  </div>
            </div>
      );
}

export default Nav;
