import React from "react";
import styles from "./Footer.module.css";

function Footer() {
      return (
            <div className={styles.footerContainer}>
                  <div className={styles.footer}>
                        <div className={styles.column}>
                              <h3 className={styles.text}>SITE NAVIGATION</h3>
                              <ul className={styles.list}>
                                    <li className={styles.li}>Home</li>
                                    <li className={styles.li}>About Us</li>
                                    <li className={styles.li}>Contact Us</li>
                              </ul>
                        </div>

                        <div className={styles.column}>
                              <h3 className={styles.text}>CONTACT</h3>
                              <ul className={styles.list}>
                                    <li className={styles.li}>Call: 09 555 1234</li>
                                    <li className={styles.li}>Freephone: 0800 123 456</li>
                                    <li className={styles.li}>Email: info@marketingnz.org</li>
                                    <li className={styles.li}>Address:</li>
                                    <li className={styles.li}>Level 3, 123 Queen Street</li>
                                    <li className={styles.li}>Auckland 1010, New Zealand</li>
                              </ul>
                        </div>

                        <div className={styles.column}>
                              <h3 className={styles.text}>SOCIAL</h3>
                              <ul className={styles.list}>
                                    <li className={styles.li}>Join us on Facebook</li>
                                    <li className={styles.li}>Follow us on LinkedIn</li>
                                    <li className={styles.li}>Follow us on Instagram</li>
                                    <li className={styles.li}>Subscribe to our YouTube Channel</li>
                              </ul>
                        </div>

                        <div className={styles.column}>
                              <h3 className={styles.text}>YOUR QUESTIONS</h3>
                              <ul className={styles.list}>
                                    <li className={styles.li}>What Is the Marketing Association?</li>
                                    <li className={styles.li}>How Do I Become a Member?</li>
                                    <li className={styles.li}>What Training Courses Are Available?</li>
                                    <li className={styles.li}>Can You Help with Digital Marketing?</li>
                                    <li className={styles.li}>How Do I Stay Updated on Industry Trends?</li>
                              </ul>
                        </div>

                        <div className={styles.columnEnd}>
                              <h3 className={styles.text}>Marketing Association New Zealand</h3>
                              <p className={styles.para}>
                                    Marketing Association New Zealand is dedicated to providing top-tier marketing
                                    resources, training, and insights to help professionals excel in the marketing
                                    industry.
                                    <br />
                                    info@marketingnz.org <br />
                                    (09) 555 1234
                              </p>
                              <div>
                                    <h1 className={styles.copyRight}>© Marketing Association New Zealand 2025. </h1>
                                    <br></br>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Footer;
