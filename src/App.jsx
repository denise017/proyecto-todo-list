import { useState } from 'react'
import styles from './App.module.css'
import Sidebar from './components/Sidebar/Sidebar'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'

function App() {
  const [tasks, setTasks] = useState([])

  function addTask(text) {
    const newTask = {
      id: crypto.randomUUID(),
      text: text,
      completed: false
    }

    setTasks([...tasks, newTask])
  }
  function toggleTask(id) {
  setTasks(tasks.map((task) =>
    task.id === id
      ? { ...task, completed: !task.completed }
      : task
  ))
}

function deleteTask(id) {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className={styles.appContainer}>
      <Sidebar />

      <main className={styles.mainContent}>
        <h1 className={styles.title}>
          <img src="/sprout.svg" alt="" />
          Mis tareas
        </h1>

        <p className={styles.summary}>Organizá tus tareas diarias</p>

        <TaskForm onAddTask={addTask} />
        <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
        />
        
      </main>
    </div>
  )
}

export default App