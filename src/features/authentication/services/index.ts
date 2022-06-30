import LoginRequest from '@authentication/models/interfaces/requests/LoginRequest.interface';
import APIConstants from '@constants/api';
import GlobalNetworking from '@services/request';

export const login = (body: LoginRequest) => {
  return GlobalNetworking.post(APIConstants.AUTHENTICATION.LOGIN, body);
};
