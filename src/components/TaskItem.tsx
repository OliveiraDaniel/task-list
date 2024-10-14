import { Task } from './../types/TaskItem'
import {
  TaskItemContainer,
  Title,
  Description,
  ContainerButtons,
} from '../styles/TaskItem'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

function TaskItem({ task }: { task: Task }) {
  return (
    <TaskItemContainer>
      <Title>{task.title}</Title>
      <Description>
        <strong>Descrição:</strong> {task.description}
      </Description>
      <small>
        <strong>Status: </strong>
        {task.status}
      </small>
      <ContainerButtons>
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ContainerButtons>
    </TaskItemContainer>
  )
}

export default TaskItem
