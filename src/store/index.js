import { configureStore, combineReducers } from '@reduxjs/toolkit';

// import { contactsReducer } from './contacts/reducer';
import { filterReducer } from './filter/reducer';
import contactsSlice from './contacts/contacrsSlice';
import authSlice from './auth/authSlice';

const rootReducer = combineReducers({
  contacts: contactsSlice,
  filter: filterReducer,
  auth: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
