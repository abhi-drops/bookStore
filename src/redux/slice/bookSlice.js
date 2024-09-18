import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    updateBook: (state, action) => {

      const index = state.findIndex(book => book.id === action.payload.id);
      if (index >= 0) {
        state[index] = action.payload;
      }
    },
    removeBook: (state, action) => {

      return state.filter(book => book.id !== action.payload);
    },
    clearBooks: (state) => {
      return [];
    },
  },
});

export const { addBook, updateBook, removeBook, clearBooks } = bookSlice.actions;
export default bookSlice.reducer;
