import styles from "./reusable.module.css";
import Link from 'next/link'


export const Logo = ( props ) => {
  return (
      <h1 className={styles.logo} {...props}>Styrate</h1>
  );
};

export const NavLink = ( props ) => {
  const { children ,isActive, ...rest } = props; 
  return (
    <Link href="/" className={`${styles.navLink} ${isActive && styles.active}`} {...rest}>
      {children}
    </Link>
  )
}