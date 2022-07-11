import { DocumentHistoryInterface } from '../DocumentHistory.interface';

export default interface GetDocumentHistoryListResponseInterface {
  ListAdministrationHistory: DocumentHistoryInterface[];
  TotalPage: number;
  TotalRow: number;
}
