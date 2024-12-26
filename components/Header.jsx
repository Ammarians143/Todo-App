import styles from "./header.module.css";

export default function Header() {
  return (
    <div>
      <h1 className={styles.header}>My Todo List</h1>
    </div>
  );
}
