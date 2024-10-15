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
import { useDispatch } from 'react-redux'
import { editForm } from '../features/openFormSlice'
import { deleteTask } from './../services/taskServices'
import { setSnackbar } from '../features/snackbarSlice'

function TaskItem({ task }: { task: Task }) {
  const dispatch = useDispatch()

  const handleDelete = async (id: number) => {
    await deleteTask(id)
    dispatch(
      setSnackbar({ message: 'Tarefa deletada com sucesso!', isOpen: true }),
    )
  }

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
        <IconButton aria-label="edit" onClick={() => dispatch(editForm(task))}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => handleDelete(task.id)}>
          <DeleteIcon />
        </IconButton>
      </ContainerButtons>
    </TaskItemContainer>
  )
}

export default TaskItem
