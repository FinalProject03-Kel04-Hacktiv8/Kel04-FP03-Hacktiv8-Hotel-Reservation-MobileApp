import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const favItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.nameHotel === favItem.nameHotel
      );

      if (existingItem) {
        return;
      } else {
        state.items.push(favItem);
        state.totalQuantity++;
      }
    },

    removeItem: (state, action) => {
      const id = action.payload.nameHotel;
      const existingItem = state.items.find((item) => item.nameHotel === id);

      if (existingItem) {
        state.items = state.items.filter((item) => item.nameHotel !== id);
        state.totalQuantity--;
      }
    },
  },
});

export const { addItem, removeItem } = favoriteSlice.actions;
export default favoriteSlice.reducer;
