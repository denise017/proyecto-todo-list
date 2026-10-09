import styles from './style.module.css'

function TaskForm() {
  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Nueva tarea..."
        aria-label="Nueva tarea"
      />

      <button type="button" aria-label="Agregar tarea">
        +
      </button>
    </form>
  )
}

export default TaskForm