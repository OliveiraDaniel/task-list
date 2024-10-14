import { useSelector } from 'react-redux'
import { RootState } from './app/store'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { MainContainer } from './styles/Container'
import GlobalStyle from './styles/GlobalStyle'
import Header from './components/Header'

function App() {
  const open = useSelector((state: RootState) => state.openForm.open)
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <TaskList />
        {open && <TaskForm />}
      </MainContainer>
    </>
  )
}

export default App
