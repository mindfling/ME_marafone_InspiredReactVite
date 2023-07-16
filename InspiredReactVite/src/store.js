import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.DEV,
})
// установить Redux Dev Tool

export default store;