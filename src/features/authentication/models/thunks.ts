import { login } from '@authentication/services';
import { createAsyncThunk } from '@reduxjs/toolkit';
import LoginRequest from './interfaces/requests/LoginRequest.interface';

export const loginThunk = createAsyncThunk(
  'authentication/login',
  async (body: LoginRequest, ___) => {
    return await login(body);
  }
);
