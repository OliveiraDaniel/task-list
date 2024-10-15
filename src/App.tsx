import { useSelector } from 'react-redux'
import { RootState } from './app/store'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { MainContainer } from './styles/Container'
import GlobalStyle from './styles/GlobalStyle'
import Header from './components/Header'
import Snackbar from './utils/Snackbar'

function App() {
  const open = useSelector((state: RootState) => state.openForm.open)
  const { message, isOpen } = useSelector((state: RootState) => state.snackbar)

  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <TaskList />
        {open && <TaskForm />}
      </MainContainer>
      <Snackbar message={message} isOpen={isOpen} />
    </>
  )
}

export default App
