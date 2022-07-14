import DocumentFormatInterface from './DocumentFormat.interface';
import GetDocumentHistoryListResponseInterface from './responses/GetDocumentHistoryListResponse.interface';

export default interface ServiceRedux {
  documentHistory: GetDocumentHistoryListResponseInterface;
  documentFormat: DocumentFormatInterface[];
  loading: Record<string, boolean>;
}
