import React from 'react'
import styles from "./navbar.module.css";
import { Logo, NavLink } from "../reusables/reusable";
import { useRouter } from 'next/router'


const navbar = () => {
  const router = useRouter();
  return (
    <nav className={styles.navbar}>
      <Logo onClick={() => router.push("/")} />
      <div className={styles.linksContainer}>
        <NavLink isActive={router.pathname === "/top-trendsetters"} href="/top-trendsetters">Top Trendsetters</NavLink>
        <NavLink isActive={router.pathname === "/"} href="/">Recommended products</NavLink>
        <NavLink href="/">All products</NavLink>
      </div>
    </nav>
  );
};

export default navbar;