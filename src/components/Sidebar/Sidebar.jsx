import styles from './style.module.css'
import TaskFilter from '../TaskFilter/TaskFilter'

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2>Todo List</h2>

      <TaskFilter />

      <img
        src="/plant.svg"
        alt="Planta decorativa"
        className={styles.plant}
      />
    </aside>
  )
}

export default Sidebar