import { createSlice } from '@reduxjs/toolkit';
import { Studentapi } from '../services/studentServices';

export const studentSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    productData: [],
    loading: true,
    errorMessage: null,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [Studentapi.pending]: (state, action) => {
      state.loading = true;
    },
    [Studentapi.fulfilled]: (state, action) => {
      state.loading = false;
      state.productData = action.payload;
    },
    [Studentapi.rejected]: (state, action) => {
      state.loading = false;
      state.errorMessage = 'Something went wrong';
    },
  },
});

export const { increment, decrement, incrementByAmount } = studentSlice.actions;
export default studentSlice.reducer;
