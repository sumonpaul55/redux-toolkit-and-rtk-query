import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type Ttodo = {
  key?: number;
  _id?: string;
  id?: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority?: string;
};
type TInitialState = {
  todos: Ttodo[];
};
const intialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: intialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Ttodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggoleComplete: (state, action) => {
      const task = state.todos.find((items) => items.id === action.payload);
      task!.isCompleted = !task?.isCompleted;
      state.todos.sort((a, b) => (a.isCompleted ? 1 : 0) - (b.isCompleted ? 1 : 0));
    },
  },
});
export const { addTodo, removeTodo, toggoleComplete } = todoSlice.actions;
export default todoSlice.reducer;
