import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SnackbarState {
  message: string
  isOpen: boolean
}

const initialState: SnackbarState = {
  message: '',
  isOpen: false,
}

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    setSnackbar: (
      state,
      action: PayloadAction<{ message: string; isOpen: boolean }>,
    ) => {
      state.message = action.payload.message
      state.isOpen = action.payload.isOpen
    },
    closeSnackbar: state => {
      state.isOpen = false
    },
  },
})

export const { setSnackbar, closeSnackbar } = snackbarSlice.actions
export default snackbarSlice.reducer
