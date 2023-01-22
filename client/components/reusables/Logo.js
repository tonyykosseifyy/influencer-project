import styles from "./logo.module.css";


const Logo = ({ propsStyles }) => {
  console.log(styles);
  return (
      <h1 className={styles.logo} style={propsStyles}>Styrate</h1>
  )
};

export default Logo ;