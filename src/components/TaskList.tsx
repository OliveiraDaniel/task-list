import { useState } from 'react'
import TaskItem from './TaskItem'
import { TaskListContainer } from '../styles/TaskList'
import { getTasks } from './../services/taskServices'
import { Task } from '../types/TaskItem'
import { Button, Select, Option } from '../styles/TaskForm'

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [open, setOpen] = useState<boolean>(false)
  const [filter, setFilter] = useState<string>('')

  const fetchTasks = async () => {
    try {
      const taskData = await getTasks()
      setTasks(taskData)
    } catch (error) {
      console.error(error)
    }
  }

  const handleButtonClick = () => {
    fetchTasks()
    setOpen(!open)
  }

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value)
  }

  const filteredTasks = tasks.filter((task) => {
    if (!filter) return true
    return task.status === filter
  })

  return (
    <>
      <Button color='#0aa025' onClick={handleButtonClick}>
        Adicionar Tarefa
      </Button>
      <Button color='#007bff' onClick={handleButtonClick}>
        {open ? 'Recolher ' : 'Listar '} Tarefas
      </Button>
      {open && (
        <>
          <Select value={filter} onChange={handleFilterChange}>
            <Option value="">Todas</Option>
            <Option value="Pendente">Pendente</Option>
            <Option value="Concluída">Concluída</Option>
            <Option value="Em Progresso">Em Progresso</Option>
          </Select>
          <TaskListContainer>
            {filteredTasks.length ? (
                filteredTasks.map((task) => (
                  <TaskItem key={task.id} task={task} />
                ))
              ) : (
                <p>Nenhuma tarefa encontrada.</p>
              )}
          </TaskListContainer>
        </>
      )}
    </>
  )
}

export default TaskList
