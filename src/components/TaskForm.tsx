import { useState } from 'react'
import { Task } from '../types/TaskItem'
import { FormContainer, Input, Textarea, Button } from '../styles/TaskForm'
import { addTask } from './../services/taskServices'

const TaskForm = ({ task }: { task?: Task }) => {
  const [title, setTitle] = useState(task?.title || '')
  const [description, setDescription] = useState(task?.description || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newTask = {
      title: title,
      description: description,
      status: 'Pendente',
    }
    addTask(newTask)
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h3>Adicione uma tarefa</h3>
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
      <Button type="submit">{task ? 'Editar' : 'Adicionar'}</Button>
    </FormContainer>
  )
}

export default TaskForm
