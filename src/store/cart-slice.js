import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    // Action
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    // Action
    addItemToCart(state, action) {
      // Adding New Item
      const newItem = action.payload;
      // Check if the Item is Already Present in the Cart
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      // If the Item is NOT Present inside the CART i.e Add New Item
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
        // The Item is Already Present in the Cart i.e Increasing the Quantity and Price
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    // Action
    removeItemFromCart(state, action) {
      // Getting the Id to Remove
      const id = action.payload;
      // Find the Item with Passed id
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      // if the quantity of ExistingItem is 1, than Filter Out all Other Items with Different id i.e Removing the 1 id item
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        // the quantity of ExistingItem is More than 1, Decrease the Quantity and Total Price
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

// All other Components can access the Actions
export const cartActions = cartSlice.actions;

// For Global Store 
export default cartSlice;
