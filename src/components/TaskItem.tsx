import { Task } from './../types/TaskItem'
import { TaskItemContainer, Title, Description } from '../styles/TaskItem'
import { Button } from '../styles/TaskForm'

function TaskItem({ task }: { task: Task }) {
  return (
    <TaskItemContainer>
      <Title>{task.title}</Title>
      <Description>{task.description}</Description>
      <span>Status: {task.status}</span>
      <Button>Editar</Button>
      <Button>Deletar</Button>
    </TaskItemContainer>
  )
}

export default TaskItem
