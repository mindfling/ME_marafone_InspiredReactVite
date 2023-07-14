import { rootReducer } from './rootReducer';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.DEV,
})
// установить Redux Dev Tool

export default store;