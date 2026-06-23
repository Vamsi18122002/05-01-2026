import { configureStore, createSlice } from '@reduxjs/toolkit'
const counterSlice = createSlice({
   name: 'counter',
   initialState: { count: 10 },
   reducers: {
    increment: (state) => {
      state.count += 2
    },
    decrement: (state) => {
      state.count -= 2
    },
  },
})

export const { increment, decrement } = counterSlice.actions
export const store = configureStore({ reducer: counterSlice.reducer })