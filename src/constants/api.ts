import { Dimensions } from 'react-native';

export default class APIConstants {
  static MOCK = 'https://69cdeb98-4881-4abc-953a-ef0e54d2a829.mock.pstmn.io';
  static STAGING = 'http://13.250.44.36';

  static GLOBAL_PAGE_SIZE = 10;

  // Authentication
  static AUTHENTICATION = {
    LOGIN: '/api/Customer/Login',
    REGISTER: '/api/Customer/Register',
  };

  static NEWS = {
    LIST: {
      METHOD: 'GET',
      URL: '/api/news',
    },
  };
}
