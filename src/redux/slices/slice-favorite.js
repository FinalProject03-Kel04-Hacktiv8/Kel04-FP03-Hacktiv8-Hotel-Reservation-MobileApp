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
      const existingItem = state.items.find((item) => item.id === favItem.id);

      if (existingItem) {
        return;
      } else {
        state.items.push(favItem);
      }

      state.totalQuantity++;
    },
    updateStockCart: (state, action) => {
      const products = action.payload;
      const existingItem = state.items.find((item) => item.id === products.id);

      if (existingItem) {
        existingItem.stock = Number(products.stock) - existingItem.quantity;
      }
    },
    removeItem: (state, action) => {
      const id = action.payload.id;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.stock++;
      }

      state.totalQuantity--;

      if (state.totalQuantity === 0) {
        state.subTotal = 0;
      } else {
        state.subTotal -= action.payload.price;
      }
    },
    removeCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;

        if (state.totalQuantity === 0) {
          state.subTotal = 0;
        } else {
          const priceAndQuantity = existingItem.price * existingItem.quantity;
          state.subTotal -= priceAndQuantity;
        }
      }
    },
    clearItem: (state) => {
      state.totalQuantity = 0;
      state.subTotal = 0;
      state.items = [];
    },
  },
});

export const { addItem } = favoriteSlice.actions;
export default favoriteSlice.reducer;
