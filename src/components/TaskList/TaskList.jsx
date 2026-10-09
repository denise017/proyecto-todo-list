import styles from './style.module.css'

function TaskList() {
  return (
    <section className={styles.taskList}>
      <h2>Mis tareas</h2>
      <p>Todavía no hay tareas. ¡Agregá una!</p>
    </section>
  )
}

export default TaskList