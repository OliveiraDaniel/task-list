import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import TaskForm from './../components/TaskForm'
import * as taskServices from './../services/taskServices'
import openFormReducer from '../features/openFormSlice'

const mockStore = configureStore({
  reducer: {
    openForm: openFormReducer,
  },
  preloadedState: {
    openForm: {
      open: true,
      isEditing: false,
      currentTask: null,
    },
  },
})

jest.mock('./../services/taskServices', () => ({
  addTask: jest.fn(),
  updateTask: jest.fn(),
}))

describe('TaskForm component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render the form with default values when adding a task', () => {
    render(
      <Provider store={mockStore}>
        <TaskForm />
      </Provider>,
    )

    expect(screen.getByPlaceholderText('Título')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Descrição')).toBeInTheDocument()
    expect(screen.getByText('Adicionar')).toBeInTheDocument()
  })

  it('should call addTask when the form is submitted', async () => {
    render(
      <Provider store={mockStore}>
        <TaskForm />
      </Provider>,
    )

    fireEvent.change(screen.getByPlaceholderText('Título'), {
      target: { value: 'Nova Tarefa' },
    })
    fireEvent.change(screen.getByPlaceholderText('Descrição'), {
      target: { value: 'Descrição da nova tarefa' },
    })

    fireEvent.click(screen.getByText('Adicionar'))

    expect(taskServices.addTask).toHaveBeenCalledWith({
      title: 'Nova Tarefa',
      description: 'Descrição da nova tarefa',
      status: 'Pendente',
    })
  })

  it('should call updateTask when the form is submitted in edit mode', async () => {
    const mockTask = {
      id: 1,
      title: 'Tarefa Existente',
      description: 'Descrição existente',
      status: 'Pendente',
    }

    const store = configureStore({
      reducer: {
        openForm: openFormReducer,
      },
      preloadedState: {
        openForm: {
          open: true,
          isEditing: true,
          currentTask: mockTask,
        },
      },
    })

    render(
      <Provider store={store}>
        <TaskForm />
      </Provider>,
    )

    fireEvent.click(screen.getByText('Editar'))

    expect(taskServices.updateTask).toHaveBeenCalledWith(mockTask.id, {
      title: 'Tarefa Existente',
      description: 'Descrição existente',
      status: 'Pendente',
    })
  })
})
