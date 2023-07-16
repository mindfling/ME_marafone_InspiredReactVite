import { combineReducers } from "@reduxjs/toolkit"; // обычный точечный импорт
import navigationReducer from "./features/navigationSlice.js"; // инпорт по дефолту с переименованием

export const rootReducer = combineReducers({
  navigation: navigationReducer, // ??????? НЕ РАБОТАЕТ ??????
});
