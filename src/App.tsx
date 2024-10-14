import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { MainContainer } from './styles/Container'
import GlobalStyle from './styles/GlobalStyle'
import Header from './components/Header'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <TaskList />
        <TaskForm />
      </MainContainer>
    </>
  )
}

export default App
