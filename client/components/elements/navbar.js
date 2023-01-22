import React from 'react'
import styles from "./navbar.module.css";
import Logo from "../reusables/Logo";


const navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
    </nav>
  );
};

export default navbar