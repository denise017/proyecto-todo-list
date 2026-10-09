import { useState, useEffect } from 'react'
import styles from './App.module.css'
import Sidebar from './components/Sidebar/Sidebar'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'

function App() {
const [tasks, setTasks] = useState(() => {
const savedTasks = localStorage.getItem('tasks')

  return savedTasks ? JSON.parse(savedTasks) : []
})

  const [filter, setFilter] = useState('all')
  useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

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

const filteredTasks = tasks.filter((task) => {
  if (filter === 'completed') return task.completed
  if (filter === 'pending') return !task.completed

  return true
})


  return (
    <div className={styles.appContainer}>
      <Sidebar filter={filter} onFilterChange={setFilter} />

      <main className={styles.mainContent}>
        <h1 className={styles.title}>
          <img src="/sprout.svg" alt="" />
          Mis tareas
        </h1>

        <p className={styles.summary}>Organizá tus tareas diarias</p>

        <TaskForm onAddTask={addTask} />
        <TaskList
        tasks={filteredTasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
        />
        
      </main>
    </div>
  )
}

export default App