import LoginRequest from '@authentication/models/interfaces/requests/LoginRequest.interface';
import {
  RegisterFormStep1,
  RegisterFormStep2,
} from '@authentication/models/interfaces/requests/RegisterRequest.interface';
import APIConstants from '@constants/api';
import UpdateAccountFormInterface from '@authentication/models/interfaces/requests/UpdateAccountRequest.interface';
import GlobalNetworking from '@services/request';
import UpdateDeviceRequestInterface from '@authentication/models/interfaces/requests/UpdateDeviceRequest.interface';
import UpdatePasswordRequestInterface from '@authentication/models/interfaces/requests/UpdatePasswordRequest.interface';

export const login = (body: LoginRequest) => {
  return GlobalNetworking.post(APIConstants.AUTHENTICATION.LOGIN, body);
};

export const getNewToken = (id: string, refreshToken: string) => {
  return GlobalNetworking.get(APIConstants.AUTHENTICATION.TOKEN.URL, {
    customerid: id,
    refreshtoken: refreshToken,
  });
};

export const register = (body: RegisterFormStep1 & RegisterFormStep2) => {
  return GlobalNetworking.post(APIConstants.AUTHENTICATION.REGISTER, body);
};

export const forgotPassword = (nik: string) => {
  const body = {
    NIK: nik,
    ...APIConstants.AUTHENTICATION.FORGOT_PASSWORD.ADDITIONAL_BODY,
  };
  return GlobalNetworking.post(
    APIConstants.AUTHENTICATION.FORGOT_PASSWORD.URL,
    body
  );
};

export const updateAccount = (body: UpdateAccountFormInterface) => {
  return GlobalNetworking.put(
    APIConstants.AUTHENTICATION.UPDATE_ACCOUNT.URL,
    body
  );
};

export const updatePassword = (body: UpdatePasswordRequestInterface) => {
  return GlobalNetworking.post(
    APIConstants.AUTHENTICATION.UPDATE_PASSWORD.URL,
    body
  );
};

export const updateDevice = (body: UpdateDeviceRequestInterface) => {
  return GlobalNetworking.post(APIConstants.AUTHENTICATION.DEVICE.URL, body);
};
