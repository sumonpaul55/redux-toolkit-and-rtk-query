import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: intialState,
  reducers: {},
});
export default todoSlice.reducer;
