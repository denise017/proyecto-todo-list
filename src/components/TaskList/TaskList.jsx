import styles from './style.module.css'

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <section className={styles.taskList}>
      <h2>Mis tareas</h2>

      {tasks.length === 0 ? (
        <p>Todavía no hay tareas. ¡Agregá una!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <label className={styles.taskItem}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onToggleTask(task.id)}
                />

                <span className={task.completed ? styles.completed : ''}>
                  {task.text}
                </span>
              </label>

              <button
                type="button"
                className={styles.deleteButton}
                onClick={() => onDeleteTask(task.id)}
                aria-label={`Eliminar ${task.text}`}
                title="Eliminar tarea"
              >
                🗑
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default TaskList