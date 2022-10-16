import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: 'IDLE',
  error: null
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
});

// Action creators are generated for each case reducer function
export const {} = exampleSlice.actions;

export default exampleSlice.reducer;
