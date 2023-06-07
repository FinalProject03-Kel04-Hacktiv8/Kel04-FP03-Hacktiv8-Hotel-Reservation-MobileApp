import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  booked: [],
}

const bookSlice = createSlice({
  name: 'booked',
  initialState,
  reducers: {
    onHandleCheckout: (state, action) => {
      state.booked.push(action.payload)
    }
  },
})

export const { onHandleCheckout } = bookSlice.actions
export default bookSlice.reducer