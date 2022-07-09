import { login, register, updateAccount } from '@authentication/services';
import StoreConstants from '@constants/store';
import UpdateAccountFormInterface from '@dashboard/models/requests/UpdateAccountRequest.interface';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { sanitizeResponse } from '@utils/store';
import LoginRequest from './interfaces/requests/LoginRequest.interface';
import {
  RegisterFormStep1,
  RegisterFormStep2,
} from './interfaces/requests/RegisterRequest.interface';

export const loginThunk = createAsyncThunk(
  `${StoreConstants.AUTH}/login`,
  async (body: LoginRequest, { rejectWithValue }) => {
    try {
      return sanitizeResponse(await login(body));
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  `${StoreConstants.AUTH}/logout`,
  async (_, { dispatch }) => {
    dispatch({
      type: 'authentication/reset',
    });
    return;
  }
);

export const registerThunk = createAsyncThunk(
  `${StoreConstants.AUTH}/register`,
  async (body: RegisterFormStep1 & RegisterFormStep2, { rejectWithValue }) => {
    try {
      return sanitizeResponse(await login(body));
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const updateAccountThunk = createAsyncThunk(
  `${StoreConstants.AUTH}/update`,
  async (body: UpdateAccountFormInterface, { rejectWithValue }) => {
    try {
      return await updateAccount(body);
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);
