import APIConstants from '@constants/api';
import GetDocumentHistoryListRequestInterface from '@service/models/interfaces/requests/GetDocumentHistoryListRequest.interface';
import DocumentFormRequestInterface from '@service/models/interfaces/requests/DocumentFormRequest.interface';
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

export const getDocumentFormat = (id: string) => {
  return GlobalNetworking.get(
    APIConstants.SERVICE.DOCUMENT_REQUEST.FORMAT.URL,
    {
      districtid: id,
    }
  );
};

export const requestDocument = (params: DocumentFormRequestInterface) => {
  return GlobalNetworking.post(
    APIConstants.SERVICE.DOCUMENT_REQUEST.REQUEST.URL,
    params
  );
};
