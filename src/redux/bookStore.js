import { configureStore } from "@reduxjs/toolkit";
import bookSlice from './slice/bookSlice';

const bookStore = configureStore({
  reducer: {
    books: bookSlice, 
  },
});

export default bookStore;
