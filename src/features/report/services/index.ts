import APIConstants from '@constants/api';
import GetReportBUMDesListRequestInterface from '@report/models/interfaces/requests/GetReportBUMDesListRequest.interface';
import GlobalNetworking from '@services/request';
import GetReportAPBDListRequestInterface from '../models/interfaces/requests/GetReportAPBDListRequest.interface';

export const getReportAPBDList = (
  params: GetReportAPBDListRequestInterface
) => {
  return GlobalNetworking.get(APIConstants.REPORT.APBD.LIST.URL, {
    districtid: params.districtId,
    page: params.page,
    ...APIConstants.REPORT.APBD.LIST.ADDITIONAL_PARAMS,
  });
};

export const getReportBUMDesList = (
  params: GetReportBUMDesListRequestInterface
) => {
  return GlobalNetworking.get(APIConstants.REPORT.BUMDES.LIST.URL, {
    ...params,
    ...APIConstants.REPORT.APBD.LIST.ADDITIONAL_PARAMS,
  });
};
