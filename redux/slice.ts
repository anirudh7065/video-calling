import { PayloadAction, createSlice,nanoid } from "@reduxjs/toolkit";

export interface CounterState {
    date: string
  }
  
  const initialState: CounterState = {
    date:'',
  }
export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setDate: (state, actions) => {
      state.date += actions.payload
    },
  },

})
export const { setDate } = slice.actions

export default slice.reducer