import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

// The Global Store
// use configureStore to Merge All App Wide Reducers
const store = configureStore({
  reducer: { 
    ui: uiSlice.reducer, 
    cart: cartSlice.reducer,
  },
});

export default store;
