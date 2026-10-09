import styles from './style.module.css'

function TaskFilter({ filter, onFilterChange }) {
  return (
    <div className={styles.filter}>
      <label htmlFor="task-filter">Filtrar tareas</label>

      <select
        id="task-filter"
        value={filter}
        onChange={(event) => onFilterChange(event.target.value)}
      >
        <option value="all">Todas</option>
        <option value="completed">Completadas</option>
        <option value="pending">Incompletas</option>
      </select>
    </div>
  )
}

export default TaskFilter