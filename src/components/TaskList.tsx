import { useState } from 'react'
import TaskItem from './TaskItem'
import { TaskListContainer } from '../styles/TaskList'
import { getTasks } from './../services/taskServices'
import { Task } from '../types/TaskItem'
import { Button } from '../styles/TaskForm'

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [open, setOpen] = useState<boolean>(false)

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

  return (
    <>
      <Button onClick={handleButtonClick}>
        {open ? 'Esconder ' : 'Listar '} Tarefas
      </Button>
      {open && (
        <TaskListContainer>
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </TaskListContainer>
      )}
    </>
  )
}

export default TaskList
