import { login, register } from '@authentication/services';
import { createAsyncThunk } from '@reduxjs/toolkit';
import LoginRequest from './interfaces/requests/LoginRequest.interface';
import {
  RegisterFormStep1,
  RegisterFormStep2,
} from './interfaces/requests/RegisterRequest.interface';

export const loginThunk = createAsyncThunk(
  'authentication/login',
  async (body: LoginRequest, { rejectWithValue }) => {
    try {
      return await login(body);
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const registerThunk = createAsyncThunk(
  'authentication/register',
  async (body: RegisterFormStep1 & RegisterFormStep2, { rejectWithValue }) => {
    try {
      return await register(body);
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);
