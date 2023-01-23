import React from 'react';
import styles from "./footer.module.css";
import { Logo } from "../reusables/reusable";


const footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.leftFooter}>
          <Logo style={{color: "white"}} />
          <p>Styrate: The social ratings and review app you can trust</p>
          <p>Copyright © 2023 all rights reserved Styrate</p>
      </div>
      <div className={styles.rightFooter}>
        <p>Find us on social media</p>
        <div className={styles.footerIcons}></div>

        <div className={styles.footerHelp}>
          <p>Our Store</p> 
          <p>Help & FAQ</p> 
          <p>Contact Us</p> 
        </div>

        <div style={{display:"flex", justifySelf:"flex-end", fontSize:"13px"}}>
          <p>Privacy Policy</p>
          <p style={{marginLeft: "10px", marginTop:"auto"}}>Terms and Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default footer;