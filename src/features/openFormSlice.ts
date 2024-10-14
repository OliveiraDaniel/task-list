import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../types/TaskItem'

interface OpenFormState {
  open: boolean
  isEditing: boolean
  currentTask: Task | null
}

const initialState: OpenFormState = {
  open: false,
  isEditing: false,
  currentTask: null,
}

const openFormSlice = createSlice({
  name: 'openForm',
  initialState,
  reducers: {
    toggleForm: state => {
      state.open = !state.open
    },
    openForm: state => {
      state.open = true
      state.isEditing = false
      state.currentTask = null
    },
    closeForm: state => {
      state.open = false
      state.isEditing = false
      state.currentTask = null
    },
    editForm: (state, action: PayloadAction<Task>) => {
      state.open = true
      state.isEditing = true
      state.currentTask = action.payload
    },
  },
})

export const { toggleForm, openForm, closeForm, editForm } =
  openFormSlice.actions

export default openFormSlice.reducer
