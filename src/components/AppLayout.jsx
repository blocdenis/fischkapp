import styles from "./AppLayout.module.css";

export const AppLayout = (props) => (
  <div className={styles.layout}>{props.children}</div>
);
