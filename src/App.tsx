import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Lista de Tarefas (To-Do List)</h1>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default App
