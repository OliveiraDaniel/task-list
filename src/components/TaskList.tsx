import { useState } from 'react'
import TaskItem from './TaskItem'
import { TaskListContainer } from '../styles/TaskList'
import { getTasks } from './../services/taskServices'
import { Task } from '../types/TaskItem'
import { Button, ContainerButtons } from '../styles/TaskForm'
import { useDispatch } from 'react-redux'
import { toggleForm } from '../features/openFormSlice'
import { TaskFilter } from './TaskFilter'

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [list, setList] = useState<boolean>(false)
  const [filter, setFilter] = useState<string>('')
  const dispatch = useDispatch()

  const fetchTasks = async () => {
    try {
      const taskData = await getTasks()
      setTasks(taskData)
      setList(!list)
    } catch (error) {
      console.error(error)
    }
  }

  const handleShowList = () => {
    if (!list) {
      fetchTasks()
    }
  }

  const handleShowForm = () => {
    dispatch(toggleForm())
    setList(false)
  }

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value)
  }

  const filteredTasks = tasks.filter(task => {
    if (!filter) return true
    return task.status === filter
  })

  return (
    <>
      <ContainerButtons>
        <Button color="#0aa025" onClick={() => handleShowForm()}>
          Adicionar Tarefa
        </Button>
        <Button color="#007bff" onClick={handleShowList}>
          Listar Tarefas
        </Button>
      </ContainerButtons>
      {list && (
        <TaskListContainer>
          <TaskFilter filter={filter} onChange={handleFilterChange} />
          {filteredTasks.length ? (
            filteredTasks.map(task => <TaskItem key={task.id} task={task} />)
          ) : (
            <p style={{ width: 'height: 50px' }}>Nenhuma tarefa encontrada.</p>
          )}
        </TaskListContainer>
      )}
    </>
  )
}

export default TaskList
