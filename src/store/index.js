import { configureStore, combineReducers } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import stateSanitizerForDevtools from './devtools';
// import customMiddleware from './someCustomMiddleware';

import { filterReducer } from './filter/reducer';
import contactsSlice from './contacts/contacrsSlice';
import authSlice from './auth/authSlice';
/////////
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  contacts: contactsSlice,
  filter: filterReducer,
  auth: persistReducer(persistConfig, authSlice),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

//////////

// export const store = configureStore({
//   reducer: rootReducer,
// });
