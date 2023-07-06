import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  orders: [],
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, deleteItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
