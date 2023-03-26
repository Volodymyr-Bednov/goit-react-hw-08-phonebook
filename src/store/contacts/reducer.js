import { createReducer } from '@reduxjs/toolkit';
import { fetchContacts } from 'store/api';
import * as actions from './actionTypes';

const iniState = {
  items: [],
  isLoading: true,
  error: null,
};

export const contactsReducer = createReducer(iniState, builder => {
  builder
    .addCase(actions.CONTACTS_ADDED, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(actions.CONTACTS_DELETED, (state, action) => {
      return state.items.filter(item => item.id !== action.payload);
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });
});
