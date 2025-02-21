import React from "react";
import styles from "./MainContent.module.css";

function MainContent() {
      return (
            <div className={styles.mainContainer}>
                  <div className={styles.content1}>
                        <img src="src\assets\MarketingStategies.jpg"></img>
                        <h1>Marketing</h1>
                        <p>Learn effective marheting strategies</p>
                  </div>
                  <div className={styles.content2}>
                        <img src="src\assets\TargetMarket.jpg"></img>
                        <h1>Target Market</h1>
                        <p>Everyone is not your customer, learn how to target the right customers</p>
                  </div>
                  <div className={styles.content3}>
                        <img src="src\assets\SocialMarketing.jpg"></img>
                        <h1>Social Media Marketing</h1>
                        <p>Create a social media presence with these marketing strategies</p>
                  </div>
            </div>
      );
}

export default MainContent;
