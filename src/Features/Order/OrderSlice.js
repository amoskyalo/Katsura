import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};
const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    deleteOrder: (state, action) => {
      const id = action.payload;
      state.orders = state.orders.filter((order) => order.id !== id);
    },

    clearOrder: (state) => {
      state.orders = [];
    },
  },
});

export const { addOrder, deleteOrder, clearOrder } = OrderSlice.actions;
export default OrderSlice.reducer;
