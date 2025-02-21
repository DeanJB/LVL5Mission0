import React from "react";
import styles from "./MainContent.module.css";

function MainContent() {
      return (
            <div className={styles.mainContainer}>
                  <div className={styles.content1}>
                        <h1>MainContent</h1>
                  </div>
                  <div className={styles.content2}>
                        <h1>MainContent2</h1>
                  </div>
                  <div className={styles.content3}>
                        <h1>MainContent3</h1>
                  </div>
            </div>
      );
}

export default MainContent;
