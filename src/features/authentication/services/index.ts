import LoginRequest from '@authentication/models/interfaces/requests/LoginRequest.interface';
import {
  RegisterFormStep1,
  RegisterFormStep2,
} from '@authentication/models/interfaces/requests/RegisterRequest.interface';
import APIConstants from '@constants/api';
import UpdateAccountFormInterface from '@dashboard/models/requests/UpdateAccountRequest.interface';
import GlobalNetworking from '@services/request';

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

export const updateAccount = (body: UpdateAccountFormInterface) => {
  return GlobalNetworking.put(
    APIConstants.AUTHENTICATION.UPDATE_ACCOUNT.URL,
    body
  );
};
