import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CATEGORY_URL } from "../routes/const";


//redux thunk
// запрос
export const fetchNavigation = createAsyncThunk(
  "navigation/fetchNavigation",
  async () => {
    const response = await fetch(CATEGORY_URL);
    const data = await response.json();
    return data;
  }  
)  


// простой редюсер
const navigationSlice = createSlice({
  name: 'navigation',
  initialState: { // начальное состояние
    activeGender: 'women', // текущий гендер в приложении
    status: 'idle',
    categories: {},
    genderList: [],
    error: null,
  },
  reducers: {
    setActiveGender: (state, action) => {
      state.activeGender = action.payload;
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchNavigation.pending, (state) => {
          state.status = 'loanding';
        })
        .addCase(fetchNavigation.fulfilled, (state, action) => {
          state.status = 'success';
          state.categories = action.payload; // запис полученные полезные данные сюда
          state.genderList = [1,2,55]  //Object.keys(action.payload); // отдельно список ключей genders
        })
        .addCase(fetchNavigation.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
    }
  }
});

// экспорт 
export const { setActiveGender } = navigationSlice.actions;

// экспорт по дефолту
export default navigationSlice.reducer;
