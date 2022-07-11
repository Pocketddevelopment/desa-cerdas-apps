import APIConstants from '@constants/api';
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
