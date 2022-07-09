import {
  getNewToken,
  login,
  register,
  updateAccount,
} from '@authentication/services';
import StoreConstants from '@constants/store';
import { AccountInterface } from '@dashboard/models/Account.interface';
import UpdateAccountFormInterface from '@dashboard/models/requests/UpdateAccountRequest.interface';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import Storage from '@utils/async-storage';
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

export const refreshTokenThunk = createAsyncThunk(
  `${StoreConstants.AUTH}/refreshToken`,
  async (_, { getState, rejectWithValue }) => {
    try {
      const { CustomerID } =
        (getState() as RootState).authentication.account || {};
      const refreshToken = await Storage.getItem(
        StoreConstants.REFRESH_TOKEN,
        ''
      );
      if (CustomerID && refreshToken) {
        return sanitizeResponse(await getNewToken(CustomerID, refreshToken))
          .Token;
      }
      return;
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
