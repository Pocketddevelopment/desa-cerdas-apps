import GetDocumentHistoryListResponseInterface from './responses/GetDocumentHistoryListResponse.interface';

export default interface ServiceRedux {
  documentHistory: GetDocumentHistoryListResponseInterface;
  loading: Record<string, boolean>;
}
