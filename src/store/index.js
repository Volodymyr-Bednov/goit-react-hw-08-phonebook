import { configureStore, combineReducers } from '@reduxjs/toolkit';

// import { contactsReducer } from './contacts/reducer';
import { filterReducer } from './filter/reducer';
import contactsSlice from './contacts/contacrsSlice';

const rootReducer = combineReducers({
  contacts: contactsSlice,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
