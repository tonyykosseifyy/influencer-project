import React, { useState } from 'react'
import styles from "./navbar.module.css";
import { Logo, NavLink, Button } from "../reusables/reusable";
import { useRouter } from 'next/router'
import Hamburger from '../reusables/hamburger';

const navbar = () => {
  const [ open , setOpen ] = useState(false);
  const router = useRouter();
  return (
    <nav className={styles.navbar}>
      <Logo onClick={() => router.push("/")} />
      <div className={`${styles.linksContainer} ${open && styles.open}`}>
        <NavLink onClick={() => setOpen(false)} isActive={router.pathname === "/top-trendsetters"} href="/top-trendsetters">Top Trendsetters</NavLink>
        <NavLink onClick={() => setOpen(false)} isActive={router.pathname === "/"} href="/">Recommended products</NavLink>
        <NavLink onClick={() => setOpen(false)} href="/">All products</NavLink>
      </div>

      <div className={styles.buttonsContainer}>
        <Button isLight>Log in</Button>
        <Button>Create Account</Button>
      </div>

      <Hamburger open={open} setOpen={(open) => setOpen(open)} />
    </nav>
  );
};

export default navbar;