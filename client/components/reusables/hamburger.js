import styles from "./hamburger.module.css";

const hamburger = ({ open, setOpen }) => {
  return (
    <button className={styles.menu} onClick={() => setOpen(!open)}>
      <div className={`${styles.hamburger} ${open && styles.active}`}></div>
    </button>
  )
};

export default hamburger ;