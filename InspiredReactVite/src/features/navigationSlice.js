import { createSlice } from "@reduxjs/toolkit";

// простой редюсер
const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    activeGender: 'women', // текущий гендер в приложении
  },
  reducers: {
    setActiveGender: (state, action) => {
      state.activeGender = action.payload;
    }
  }
});

// экспорт 
export const { setActiveGender } = navigationSlice.actions;

// экспорт по дефолту
export default navigationSlice.reducer;
