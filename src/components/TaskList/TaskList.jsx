import styles from './style.module.css'

function TaskList({ tasks }) {
  return (
    <section className={styles.taskList}>
      <h2>Mis tareas</h2>

      {tasks.length === 0 ? (
        <p>Todavía no hay tareas. ¡Agregá una!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default TaskList