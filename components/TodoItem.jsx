import styles from "./todoItem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.itemsContainer}>
      <div className={styles.item}>
        <span
          className={className}
          onClick={() => {
            handleClick(item.name);
          }}
        >
          {item.name}
        </span>
        <button
          onClick={() => handleDelete(item)}
          className={styles.decorateButton}
        >
          X
        </button>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
