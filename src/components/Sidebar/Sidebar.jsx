import styles from './style.module.css'
import TaskFilter from '../TaskFilter/TaskFilter'

function Sidebar({ filter, onFilterChange }) {
  return (
    <aside className={styles.sidebar}>
      <h2>Todo List</h2>

      <TaskFilter
        filter={filter}
        onFilterChange={onFilterChange}
      />

      <img
        src="/plant.svg"
        alt="Planta decorativa"
        className={styles.plant}
      />
    </aside>
  )
}

export default Sidebar