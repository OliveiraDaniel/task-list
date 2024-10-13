import { Task } from './../types/TaskItem'
import { TaskItemContainer, Title, Description } from '../styles/TaskItem'

function TaskItem({ task }: { task: Task }) {
  return (
    <TaskItemContainer>
      <Title>{task.title}</Title>
      <Description>{task.description}</Description>
      <span>Status: {task.status}</span>
    </TaskItemContainer>
  )
}

export default TaskItem
