import APIConstants from '@constants/api';
import GlobalNetworking from '@services/request';

export const getNotificationList = (id: string, page: number) => {
  return GlobalNetworking.get(APIConstants.NOTIFICATION.LIST.URL, {
    customerId: id,
    page: page,
    ...APIConstants.NOTIFICATION.LIST.ADDITIONAL_PARAMS,
  });
};

export const readnotification = (id: string) => {
  return GlobalNetworking.post(APIConstants.NOTIFICATION.READ.URL, {
    ID: id,
  });
};
