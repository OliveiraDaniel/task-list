import { configureStore } from '@reduxjs/toolkit'
import openFormReducer from '../features/openFormSlice'
import snackbarReducer from '../features/snackbarSlice'

export const store = configureStore({
  reducer: {
    openForm: openFormReducer,
    snackbar: snackbarReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
