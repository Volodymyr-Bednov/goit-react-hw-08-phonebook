import { createSlice } from '@reduxjs/toolkit';
import { authRegister, authLogin, authLogout, authCurrent } from './authApi';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    //register
    [authRegister.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authRegister.rejected](state, action) {
      state.user.name = null;
      state.user.email = null;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    //login
    [authLogin.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    //logout
    [authLogout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    //current authCurrent

    [authCurrent.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
