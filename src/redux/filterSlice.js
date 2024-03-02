import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const filterSlice = createSlice({
  name: "filterData",
  initialState,
  reducers: {
    newArival: (state) => {
      return "newArival"
    },
    accessories: (state) => {
      return "accessories"
    },
    electronics: (state) => {
      return "electronics"
    },
    clothing: (state) => {
      return "clothing"
    },
  },
});

export const { newArival, accessories, electronics, clothing } = filterSlice.actions;
export default filterSlice.reducer;
