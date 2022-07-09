import GetCreativeDetailInterface from '@attraction/models/interfaces/requests/GetCreativeDetail.interface';
import GetDestinationDetailInterface from '@attraction/models/interfaces/requests/GetDestinationDetail.interface';
import APIConstants from '@constants/api';
import GlobalNetworking from '@services/request';

export const getDestinationList = (
  districtId: string,
  page: number,
  pageSize: number = 10
) => {
  return GlobalNetworking.get(APIConstants.ATTRACTION.DESTINATION.URL, {
    districtId: districtId,
    page: page,
    pageSize: pageSize,
  });
};

export const getDestinationDetail = (params: GetDestinationDetailInterface) => {
  return GlobalNetworking.get(
    APIConstants.ATTRACTION.DESTINATION_DETAIL.URL,
    params
  );
};

export const getCreativeList = (
  districtId: string,
  page: number,
  pageSize: number = 10
) => {
  return GlobalNetworking.get(APIConstants.ATTRACTION.CREATIVE.URL, {
    districtId: districtId,
    page: page,
    pageSize: pageSize,
  });
};

export const getCreativeDetail = (params: GetCreativeDetailInterface) => {
  return GlobalNetworking.get(
    APIConstants.ATTRACTION.CREATIVE_DETAIL.URL,
    params
  );
};
