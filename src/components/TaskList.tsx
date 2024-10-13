import TaskItem from './TaskItem'
import { TaskListContainer } from '../styles/TaskList'

const TaskList = () => {
  const taskMock = [
    {
      id: 1,
      title: 'Teste 1',
      description: 'Task de teste',
      status: 'Pendente',
    },
    {
      id: 2,
      title: 'Teste 2',
      description: 'Task de teste 2',
      status: 'Em Progresso',
    },
  ]

  return (
    <TaskListContainer>
      {taskMock.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </TaskListContainer>
  )
}

export default TaskList
