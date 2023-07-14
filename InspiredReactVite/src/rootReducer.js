// обычный импорт
import { combineReducers } from "@reduxjs/toolkit";
// инпорт по дефолту с переименованием
import navigationReducer from "./features/navigationSlice";

export const rootReducer = combineReducers({
  navigation: navigationReducer,
})
