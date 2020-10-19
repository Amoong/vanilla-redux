import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = JSON.parse(localStorage.getItem("ToDos"));

const toDos = createSlice({
  name: "toDosReducer",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => state.filter(toDo => toDo.id !== action.payload),
  },
});

const store = configureStore({ reducer: toDos.reducer });

store.subscribe(() => {
  localStorage.setItem("ToDos", JSON.stringify(store.getState()));
});

export const { add, remove } = toDos.actions;

export default store;
