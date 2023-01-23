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
        
        </div>
    </footer>
  );
};

export default footer;