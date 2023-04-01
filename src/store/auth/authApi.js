import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// // Utility to create JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// // Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

console.log('AXIOS-TOKEN:: - ', axios.defaults.headers.common.Authorization);
export const authRegister = createAsyncThunk(
  'auth/register',
  async (authData, thunkAPI) => {
    try {
      console.log('authData', authData);
      const response = await axios.post('/users/signup', authData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const authLogin = createAsyncThunk(
  'auth/login',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', authData);
      console.log('TOKEN -- ', response.data.token);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const authLogout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const authCurrent = createAsyncThunk(
  'auth/authCurrent',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) return thunkAPI.rejectWithValue(5);

    setAuthHeader(token);

    console.log(token);
    try {
      const response = await axios.get('/users/current');
      console.log(response.data);
      return response.data;
      // clearAuthHeader();
    } catch (e) {
      console.log('error', e);
    }
  }
);
