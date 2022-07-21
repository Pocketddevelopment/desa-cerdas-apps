import { AuthContext } from '@@@/App';
import UpdateAccountFormInterface from '@authentication/models/interfaces/requests/UpdateAccountRequest.interface';
import {
  forgotPassword,
  getNewToken,
  login,
  register,
  updateAccount,
  updateDevice,
  updatePassword,
} from '@authentication/services';
import DeviceContants from '@constants/device';
import StoreConstants from '@constants/store';
import { firebase } from '@react-native-firebase/messaging';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import Storage from '@utils/async-storage';
import { navigate } from '@utils/navigation';
import { sanitizeResponse } from '@utils/store';
import { useContext } from 'react';
import LoginRequest from './interfaces/requests/LoginRequest.interface';
import {
  RegisterFormStep1,
  RegisterFormStep2,
} from './interfaces/requests/RegisterRequest.interface';
import UpdatePasswordThunkPayloadInterface from './interfaces/requests/UpdatePasswordThunkPayload.interface';

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
      const refreshToken: string = await Storage.getItem(
        StoreConstants.REFRESH_TOKEN,
        ''
      );
      if (CustomerID && refreshToken) {
        return sanitizeResponse(
          await getNewToken(CustomerID, encodeURI(refreshToken))
        ).Token;
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
    navigate('Logout');
    return;
  }
);

export const registerThunk = createAsyncThunk(
  `${StoreConstants.AUTH}/register`,
  async (body: RegisterFormStep1 & RegisterFormStep2, { rejectWithValue }) => {
    try {
      return await register(body);
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const forgotPasswordThunk = createAsyncThunk(
  `${StoreConstants.AUTH}/forgotPassword`,
  async (nik: string, { rejectWithValue }) => {
    try {
      return await forgotPassword(nik);
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const updateAccountThunk = createAsyncThunk(
  `${StoreConstants.AUTH}/update`,
  async (body: UpdateAccountFormInterface, { rejectWithValue }) => {
    try {
      let response = await updateAccount(body);
      const { CustomerID, ...rest } = body;
      response = {
        ...response,
        ...rest,
      };
      return response;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const updatePasswordThunk = createAsyncThunk(
  `${StoreConstants.AUTH}/updatePassword`,
  async (
    body: UpdatePasswordThunkPayloadInterface,
    { getState, rejectWithValue }
  ) => {
    try {
      const { CustomerID } = (getState() as RootState).authentication.account;
      return await updatePassword({
        customerID: CustomerID,
        ...body,
      });
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const updateDeviceThunk = createAsyncThunk(
  `${StoreConstants.AUTH}/updateDevice`,
  async (_, { getState, rejectWithValue }) => {
    try {
      const { DistrictDescription, DistrictIcon, DateOfBirth, ...rest } = (
        getState() as RootState
      ).authentication.account;
      return await updateDevice({
        ...rest,
        DateOfBirth: DateOfBirth.toString(),
        FCMToken: await firebase.messaging().getToken(),
        DeviceID: DeviceContants.DEVICE_ID,
        DeviceModel: DeviceContants.DEVICE_MODEL,
        Version: DeviceContants.APP_VERSION,
      });
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);
