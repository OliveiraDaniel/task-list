import { useState } from 'react'
import { Task } from '../types/TaskItem'
import { FormContainer, Input, Textarea, Button } from '../styles/TaskForm'

const TaskForm = ({ task }: { task?: Task }) => {
  const [title, setTitle] = useState(task?.title || '')
  const [description, setDescription] = useState(task?.description || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ title, description })
  }

  return (
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
      <Button type="submit">{task ? 'Editar' : 'Adicionar'}</Button>
    </FormContainer>
  )
}

export default TaskForm
