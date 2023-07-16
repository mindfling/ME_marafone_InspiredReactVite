import { combineReducers } from "@reduxjs/toolkit"; // обычный точечный импорт
import navigationReducer from "./features/navigationSlice"; // инпорт по дефолту с переименованием

export const rootReducer = combineReducers({
  navigation: navigationReducer, // ??????? НЕ РАБОТАЕТ ??????
});
