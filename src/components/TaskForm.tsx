import { useState } from 'react'
import { Task } from '../types/TaskItem'
import {
  FormContainer,
  Input,
  Textarea,
  Button,
  ModalOverlay,
  ModalContent,
  CloseButton,
} from '../styles/TaskForm'
import { addTask } from './../services/taskServices'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/store'
import { toggleForm, closeForm } from '../features/openFormSlice'

const TaskForm = ({ task }: { task?: Task }) => {
  const [title, setTitle] = useState(task?.title || '')
  const [description, setDescription] = useState(task?.description || '')
  const open = useSelector((state: RootState) => state.openForm.open)
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newTask = {
      title,
      description,
      status: 'Pendente',
    }
    addTask(newTask)
    dispatch(toggleForm())
  }

  return (
    <ModalOverlay isOpen={open}>
      <ModalContent>
        <h3>{task ? 'Editar Tarefa' : 'Adicione uma Tarefa'}</h3>
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
          <Button color="#0aa025" type="submit">
            {task ? 'Editar' : 'Adicionar'}
          </Button>
        </FormContainer>
      </ModalContent>
    </ModalOverlay>
  )
}

export default TaskForm
