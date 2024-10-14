import axios from 'axios'
import { Task } from '../types/TaskItem'

const API_URL = 'http://localhost:3001/tasks'

export const getTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    console.error('Erro ao buscar as tarefas', error)
    throw error
  }
}

export const addTask = async (task: Omit<Task, 'id'>): Promise<Task> => {
  try {
    const response = await axios.post(API_URL, task)
    return response.data
  } catch (error) {
    console.error('Erro ao adicionar a tarefa', error)
    throw error
  }
}

export const updateTask = async (
  id: number,
  updatedTask: Partial<Task>,
): Promise<Task> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedTask)
    return response.data
  } catch (error) {
    console.error('Erro ao atualizar a tarefa', error)
    throw error
  }
}

export const deleteTask = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`)
  } catch (error) {
    console.error('Erro ao deletar a tarefa', error)
    throw error
  }
}
