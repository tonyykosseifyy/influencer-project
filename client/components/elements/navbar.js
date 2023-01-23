import React from 'react'
import styles from "./navbar.module.css";
import { Logo, NavLink } from "../reusables/Logo";
import { useRouter } from 'next/router'


const navbar = () => {
  const router = useRouter();
  return (
    <nav className={styles.navbar}>
      <Logo onClick={() => router.push("/")} />
      <div className={styles.linksContainer}>
        <NavLink></NavLink>
        <NavLink></NavLink>
      </div>
    </nav>
  );
};

export default navbar;