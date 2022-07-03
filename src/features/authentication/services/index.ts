import LoginRequest from '@authentication/models/interfaces/requests/LoginRequest.interface';
import {
  RegisterFormStep1,
  RegisterFormStep2,
} from '@authentication/models/interfaces/requests/RegisterRequest.interface';
import APIConstants from '@constants/api';
import GlobalNetworking from '@services/request';

export const login = (body: LoginRequest) => {
  return GlobalNetworking.post(APIConstants.AUTHENTICATION.LOGIN, body);
};

export const register = (body: RegisterFormStep1 & RegisterFormStep2) => {
  return GlobalNetworking.post(APIConstants.AUTHENTICATION.REGISTER, body);
};
