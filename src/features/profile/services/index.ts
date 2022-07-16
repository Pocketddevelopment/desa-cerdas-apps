import APIConstants from '@constants/api';
import GetEventListRequest from '@profile/models/interfaces/requests/GetEventListRequest.interface';
import GlobalNetworking from '@services/request';

export const getDistrictProfile = (id: string) => {
  return GlobalNetworking.get(APIConstants.PROFILE.PROFILE.URL, {
    districtId: id,
  });
};

export const getDistrictOrganizationStructure = (id: string) => {
  return GlobalNetworking.get(APIConstants.PROFILE.STRUCTURE.URL, {
    districtId: id,
  });
};

export const getEventList = (params: GetEventListRequest) => {
  return GlobalNetworking.get(APIConstants.PROFILE.EVENT.LIST.URL, {
    ...params,
    ...APIConstants.PROFILE.EVENT.LIST.ADDITIONAL_PARAMS,
  });
};

export const getEventDetail = (id: string) => {
  return GlobalNetworking.get(APIConstants.PROFILE.EVENT.DETAIL.URL, {
    eventId: id,
  });
};

export const getEducationStatistic = (id: string) => {
  return GlobalNetworking.get(APIConstants.PROFILE.STATISTIC.EDUCATION.URL, {
    districtId: id,
  });
};
