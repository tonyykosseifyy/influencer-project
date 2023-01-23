import styles from "./hamburger.module.css";

const hamburger = ({ open, setOpen }) => {
  return (
      <button className={`${styles.hamburger} ${open && styles.open}`} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
  );
};

export default hamburger ;