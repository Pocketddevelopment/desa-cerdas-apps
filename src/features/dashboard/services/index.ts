import APIConstants from '@constants/api';
import GlobalNetworking from '@services/request';

export const getAirPollution = (id: string) => {
  return GlobalNetworking.get(APIConstants.DASHBOARD.WEATHER.URL, {
    districtId: id,
  });
};
