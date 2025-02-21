import React from "react";
import styles from "./Hero.module.css";

function Hero() {
      return (
            <div className={styles.heroContainer}>
                  <div className={styles.leftBox}>
                        <h1 className={styles.text1}> More Customers</h1>
                        <h1 className={styles.text2}> More Sales</h1>
                        <h1 className={styles.text3}> More Business</h1>
                  </div>

                  <div className={styles.rightBox}>
                        <input type="text" placeholder="  Type Here..."></input>
                        <button>Search</button>
                  </div>
            </div>
      );
}

export default Hero;
