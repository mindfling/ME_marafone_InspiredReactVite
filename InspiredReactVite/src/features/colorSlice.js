import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CATEGORY_URL, COLORS_URL } from "../routes/const";
import { build } from "vite";

// запрос цвета
export const fetchCorols = createAsyncThunk(
  "color/fetchColors",
  async () => {
    const response = await fetch(COLORS_URL);
    return await response.json();
  }
)



// редюсер получаем цвета
const colorSlice = createSlice({
  name: 'color',
  initialState: { // начальное состояние
    status: 'idle',
    colorList: [],
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCorols.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCorols.fulfilled, (state, action) => {
        state.status = 'success';
        state.colorList = action.payload;
      })
      .addCase(fetchCorols.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
})


// экспорт по дефолту
export default colorSlice.reducer;
