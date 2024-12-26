import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          className={styles.inputContainer}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text"
          value={todo.name}
          placeholder="Enter Your todo"
        />
        <button className={styles.formButton} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
