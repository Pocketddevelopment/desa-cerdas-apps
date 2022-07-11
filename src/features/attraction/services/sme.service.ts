import GetSMEDetailInterface from '@attraction/models/interfaces/requests/GetSMEDetail.interface';
import GetSMEListRequestInterface from '@attraction/models/interfaces/requests/GetSMEListRequest.interface';
import APIConstants from '@constants/api';
import GlobalNetworking from '@services/request';

export const getSMEList = (params: GetSMEListRequestInterface) => {
  return GlobalNetworking.get(APIConstants.ATTRACTION.SME.URL, params);
};

export const getSMEDetail = (params: GetSMEDetailInterface) => {
  return GlobalNetworking.get(APIConstants.ATTRACTION.SME_DETAIL.URL, params);
};
