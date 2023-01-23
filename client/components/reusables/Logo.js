import styles from "./logo.module.css";
import Link from 'next/link'


export const Logo = ( props ) => {
  return (
      <h1 className={styles.logo} {...props}>Styrate</h1>
  );
};

export const NavLink = ( props ) => {
  const { children , ...rest } = props; 
  return (
    <Link href="/" className={styles.navLink} {...rest}>
      {children}
    </Link>
  )
}