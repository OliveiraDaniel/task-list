import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { MainContainer } from './styles/Container'

function App() {
  return (
    <MainContainer>
      <h1>Lista de Tarefas (To-Do List)</h1>
      <TaskForm />
      <TaskList />
    </MainContainer>
  )
}

export default App
