import ComplaintInterface from './Complaint.interface';
import DocumentFormatInterface from './DocumentFormat.interface';
import GetComplaintListResponseInterface from './responses/GetComplaintListResponse.interface';
import GetDocumentHistoryListResponseInterface from './responses/GetDocumentHistoryListResponse.interface';

export default interface ServiceRedux {
  documentHistory: GetDocumentHistoryListResponseInterface;
  documentFormat: DocumentFormatInterface[];
  complaintList: GetComplaintListResponseInterface;
  loading: Record<string, boolean>;
}
