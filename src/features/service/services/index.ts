import APIConstants from '@constants/api';
import GetDocumentHistoryListRequestInterface from '@service/models/interfaces/requests/GetDocumentHistoryListRequest.interface';
import GlobalNetworking from '@services/request';

export const getDocumentHistoryList = (
  params: GetDocumentHistoryListRequestInterface
) => {
  return GlobalNetworking.get(APIConstants.SERVICE.DOCUMENT_HISTORY.LIST.URL, {
    customerId: params.customerId,
    districtid: params.districtId,
    page: params.page,
    ...APIConstants.SERVICE.DOCUMENT_HISTORY.LIST.ADDITIONAL_PARAMS,
  });
};
