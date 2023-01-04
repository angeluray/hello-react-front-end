import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = "http://localhost:3001/api/v1/greetings";

export const fetchingGreeting = createAsyncThunk(
  "greeting/fetchingGreeting",
  async () => {
    const response = await fetch(URL)
    const data = await response.json();
    return data;
  },
);

const greetingReducer = createSlice({
  name: 'message',
  initialState: [],
  extraReducers: {
    [fetchingGreeting.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default greetingReducer.reducer;