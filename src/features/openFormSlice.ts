import { createSlice } from '@reduxjs/toolkit'

interface OpenFormState {
  open: boolean
}

const initialState: OpenFormState = {
  open: false,
};

const openFormSlice = createSlice({
  name: 'openForm',
  initialState,
  reducers: {
    toggleForm: (state) => {
      state.open = !state.open;
    },
    openForm: (state) => {
      state.open = true;
    },
    closeForm: (state) => {
      state.open = false;
    },
  },
})

export const { toggleForm, openForm, closeForm } = openFormSlice.actions

export default openFormSlice.reducer
