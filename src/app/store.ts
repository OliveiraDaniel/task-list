import { configureStore } from '@reduxjs/toolkit'
import openFormReducer from '../features/openFormSlice'

export const store = configureStore({
  reducer: {
    openForm: openFormReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch