import { Dimensions, Platform } from 'react-native';

export default class APIConstants {
  static SERVER = 'http://54.255.148.147:8002';
  static MOCK = 'https://69cdeb98-4881-4abc-953a-ef0e54d2a829.mock.pstmn.io';
  static STAGING = 'http://54.255.148.147';

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
    UPDATE_PASSWORD: {
      METHOD: 'POST',
      URL: '/api/Customer/Password',
    },
    DEVICE: {
      METHOD: 'POST',
      URL: '/api/Device',
    },
    FORGOT_PASSWORD: {
      METHOD: 'POST',
      URL: '/api/Customer/ForgotPassword',
      ADDITIONAL_BODY: {
        Source: Platform.OS,
      },
    },
  };

  static DASHBOARD = {
    WEATHER: {
      METHOD: 'GET',
      URL: '/AirPollution',
    },
    PRIVACY_POLICY: {
      METHOD: 'GET',
      URL: '/api/Content',
      ADDITIONAL_PARAMS: {
        contentId: '74894A56-3F15-4D87-B139-26BDEC54C507',
      },
    },
    TERMS_CONDITION: {
      METHOD: 'GET',
      URL: '/api/Content',
      ADDITIONAL_PARAMS: {
        contentId: '5FD5C62F-C492-4690-A714-AC6EF4F32D52',
      },
    },
  };

  static PROFILE = {
    PROFILE: {
      METHOD: 'GET',
      URL: '/api/district',
    },

    STRUCTURE: {
      METHOD: 'GET',
      URL: '/api/OrganizationalStructure',
    },

    EVENT: {
      LIST: {
        METHOD: 'GET',
        URL: '/api/Event',
        ADDITIONAL_PARAMS: {
          pageSize: this.GLOBAL_PAGE_SIZE,
        },
      },

      DETAIL: {
        METHOD: 'GET',
        URL: '/api/Event/Detail',
      },
    },

    STATISTIC: {
      EDUCATION: {
        METHOD: 'GET',
        URL: '/api/Education',
      },
    },
  };

  static NOTIFICATION = {
    LIST: {
      METHOD: 'GET',
      URL: '/api/Inbox',
      ADDITIONAL_PARAMS: {
        pageSize: this.GLOBAL_PAGE_SIZE,
      },
    },
    READ: {
      METHOD: 'GET',
      URL: '/api/Inbox/Read',
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
    BUMDES: {
      LIST: {
        METHOD: 'GET',
        URL: '/api/report/bumdes',
        ADDITIONAL_PARAMS: {
          pageSize: 10,
        },
      },
    },
  };

  static SERVICE = {
    DOCUMENT_HISTORY: {
      LIST: {
        METHOD: 'GET',
        URL: '/api/administration',
        ADDITIONAL_PARAMS: {
          pageSize: this.GLOBAL_PAGE_SIZE,
          isApproval: true,
        },
      },
    },

    DOCUMENT_REQUEST: {
      FORMAT: {
        METHOD: 'GET',
        URL: '/api/administrationformat',
      },
      REQUEST: {
        METHOD: 'POST',
        URL: '/api/AdministrationRequest',
      },
    },

    COMPLAINT: {
      LIST: {
        METHOD: 'GET',
        URL: '/api/complaint',
        ADDITIONAL_PARAMS: {
          pageSize: this.GLOBAL_PAGE_SIZE,
        },
      },

      DETAIL: {
        METHOD: 'GET',
        URL: '/api/complaint/detail',
      },

      POST_COMPLAINT: {
        METHOD: 'POST',
        URL: '/api/complaint',
        ADDITIONAL_BODY: {
          source: 'Aplikasi',
        },
      },

      UPDATE_COMMENT: {
        METHOD: 'PUT',
        URL: '/api/complaint',
        ADDTIONAL_BODY: {
          source: 'Aplikasi',
          type: 'Customer',
          isCompleted: false,
        },
      },
    },
  };
}
