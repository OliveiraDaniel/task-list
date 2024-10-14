import { useState, useEffect } from 'react'
import {
  FormContainer,
  Input,
  Textarea,
  Button,
  ModalOverlay,
  ModalContent,
  CloseButton,
} from '../styles/TaskForm'
import { addTask, updateTask } from './../services/taskServices'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/store'
import { toggleForm, closeForm } from '../features/openFormSlice'
import { Select, MenuItem } from '@mui/material'

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const taskData = {
      title,
      description,
      status,
    }

    if (isEditing && currentTask) {
      updateTask(currentTask.id, taskData)
      dispatch(toggleForm())
      return
    }

    addTask(taskData)
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

          {isEditing ? (
            <>
              <label>
                <strong>Status Atual: </strong>
                <Select
                  value={status}
                  onChange={e => setStatus(e.target.value)}
                  displayEmpty
                >
                  <MenuItem value="Pendente">Pendente</MenuItem>
                  <MenuItem value="Em Progresso">Em Progresso</MenuItem>
                  <MenuItem value="Concluído">Concluído</MenuItem>
                </Select>
              </label>
            </>
          ) : (
            <span>
              <strong>Status:</strong> {status}
            </span>
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
