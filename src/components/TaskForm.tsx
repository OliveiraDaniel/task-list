import { useState, useEffect } from 'react'
import {
  FormContainer,
  Input,
  Textarea,
  Button,
  ModalOverlay,
  ModalContent,
  CloseButton,
  Select,
  Option,
} from '../styles/TaskForm'
import { addTask, updateTask } from './../services/taskServices'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/store'
import { toggleForm, closeForm } from '../features/openFormSlice'
import { setSnackbar } from '../features/snackbarSlice'

const TaskForm = () => {
  const dispatch = useDispatch()
  const open = useSelector((state: RootState) => state.openForm.open)
  const isEditing = useSelector((state: RootState) => state.openForm.isEditing)
  const currentTask = useSelector(
    (state: RootState) => state.openForm.currentTask,
  )

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('Pendente')

  useEffect(() => {
    if (isEditing && currentTask) {
      setTitle(currentTask.title)
      setDescription(currentTask.description)
      setStatus(currentTask.status)
    } else {
      setTitle('')
      setDescription('')
      setStatus('Pendente')
    }
  }, [isEditing, currentTask])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const taskData = {
      title,
      description,
      status,
    }

    if (isEditing && currentTask) {
      await updateTask(currentTask.id, taskData)
      dispatch(
        setSnackbar({ message: 'Tarefa editada com sucesso!', isOpen: true }),
      )
    } else {
      await addTask(taskData)
      dispatch(
        setSnackbar({
          message: 'Tarefa adicionada com sucesso!',
          isOpen: true,
        }),
      )
    }

    dispatch(toggleForm())
  }

  return (
    <ModalOverlay isOpen={open}>
      <ModalContent>
        <h3>{isEditing ? 'Editar Tarefa' : 'Adicione uma Tarefa'}</h3>
        <CloseButton onClick={() => dispatch(closeForm())}>×</CloseButton>
        <FormContainer onSubmit={handleSubmit}>
          <Input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Título"
            required
          />
          <Textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Descrição"
            required
          />
          {isEditing && (
            <Select value={status} onChange={e => setStatus(e.target.value)}>
              <Option value="Pendente">Pendente</Option>
              <Option value="Em Progresso">Em Progresso</Option>
              <Option value="Concluída">Concluída</Option>
            </Select>
          )}
          <Button color="#0aa025" type="submit">
            {isEditing ? 'Editar' : 'Adicionar'}
          </Button>
        </FormContainer>
      </ModalContent>
    </ModalOverlay>
  )
}

export default TaskForm
