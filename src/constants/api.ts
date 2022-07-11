import { Dimensions } from 'react-native';

export default class APIConstants {
  static MOCK = 'https://69cdeb98-4881-4abc-953a-ef0e54d2a829.mock.pstmn.io';
  static STAGING = 'http://13.250.44.36';

  static GLOBAL_PAGE_SIZE = 10;

  // Authentication
  static AUTHENTICATION = {
    LOGIN: '/api/Customer/Login',
    TOKEN: {
      METHOD: 'GET',
      URL: '/api/customer/token',
    },
    REGISTER: '/api/Customer/Register',
    UPDATE_ACCOUNT: {
      METHOD: 'PUT',
      URL: '/api/customer',
    },
  };

  static NEWS = {
    LIST: {
      METHOD: 'GET',
      URL: '/api/news',
    },
    DETAIL: {
      METHOD: 'GET',
      URL: '/api/news/detail',
    },
  };

  static ATTRACTION = {
    DESTINATION: {
      METHOD: 'GET',
      URL: '/api/touristdestination',
    },
    DESTINATION_DETAIL: {
      METHOD: 'GET',
      URL: '/api/touristdestination/detail',
    },
    CREATIVE: {
      METHOD: 'GET',
      URL: '/api/creativedestination',
    },
    CREATIVE_DETAIL: {
      METHOD: 'GET',
      URL: '/api/touristdestination/detail',
    },
    SME: {
      METHOD: 'GET',
      URL: '/api/umkm',
    },
    SME_DETAIL: {
      METHOD: 'GET',
      URL: '/api/umkm/detail',
    },
  };

  static REPORT = {
    APBD: {
      LIST: {
        METHOD: 'GET',
        URL: '/api/report/apbd',
        ADDITIONAL_PARAMS: {
          pageSize: 10,
        },
      },
    },
  };
}
