import { createSlice } from '@reduxjs/toolkit';

// This will Create a Slice of Data for UI
const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

// Make sure Actions are Available for Components to Dispatch 
export const uiActions = uiSlice.actions;

export default uiSlice;
