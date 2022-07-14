import APIConstants from '@constants/api';
import GetDocumentHistoryListRequestInterface from '@service/models/interfaces/requests/GetDocumentHistoryListRequest.interface';
import DocumentFormRequestInterface from '@service/models/interfaces/requests/DocumentFormRequest.interface';
import GlobalNetworking from '@services/request';
import GetComplaintListRequestInterface from '@service/models/interfaces/requests/GetComplaintListRequest.interface';
import GetComplaintDetailRequestInterface from '@service/models/interfaces/requests/GetComplaintDetailRequest.interface';
import UpdateCommentRequestInterface from '@service/models/interfaces/requests/UpdateCommentRequest.interface';
import CreateComplaintRequestInterface from '@service/models/interfaces/requests/CreateComplaintRequest.interface';

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

export const getComplaintList = (params: GetComplaintListRequestInterface) => {
  return GlobalNetworking.get(APIConstants.SERVICE.COMPLAINT.LIST.URL, {
    ...params,
    ...APIConstants.SERVICE.COMPLAINT.LIST.ADDITIONAL_PARAMS,
  });
};

export const getComplaintDetail = (
  params: GetComplaintDetailRequestInterface
) => {
  return GlobalNetworking.get(
    APIConstants.SERVICE.COMPLAINT.DETAIL.URL,
    params
  );
};

export const createComplaint = (params: CreateComplaintRequestInterface) => {
  return GlobalNetworking.post(
    APIConstants.SERVICE.COMPLAINT.POST_COMPLAINT.URL,
    {
      ...params,
      ...APIConstants.SERVICE.COMPLAINT.POST_COMPLAINT.ADDITIONAL_BODY,
    }
  );
};

export const putComplaintComment = (params: UpdateCommentRequestInterface) => {
  return GlobalNetworking.put(
    APIConstants.SERVICE.COMPLAINT.UPDATE_COMMENT.URL,
    {
      ...params,
      ...APIConstants.SERVICE.COMPLAINT.UPDATE_COMMENT.ADDTIONAL_BODY,
    }
  );
};
