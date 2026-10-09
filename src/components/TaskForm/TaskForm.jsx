import { useState } from 'react'
import styles from './style.module.css'

function TaskForm({ onAddTask }) {
  const [text, setText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (text.trim() === '') return

    onAddTask(text.trim())
    setText('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea..."
        aria-label="Nueva tarea"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <button type="submit" aria-label="Agregar tarea">+</button>
    </form>
  )
}

export default TaskForm