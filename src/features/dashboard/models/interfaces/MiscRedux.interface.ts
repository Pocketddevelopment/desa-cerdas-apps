import GetReportAPBDListResponseInterface from '@@@/src/features/report/models/interfaces/responses/GetReportAPBDListResponse.interface';
import GetCreativeListResponseInterface from '@attraction/models/interfaces/responses/GetCreativeListResponse.interface';
import GetDestinationListResponseInterface from '@attraction/models/interfaces/responses/GetDestinationListResponse.interface';
import GetSMEListResponseInterface from '@attraction/models/interfaces/responses/GetSMEListResponse.interface.';
import GetNewsResponse from './responses/GetNewsResponse.interface';

export default interface MiscRedux {
  destination: GetDestinationListResponseInterface | null;
  creative: GetCreativeListResponseInterface | null;
  sme: GetSMEListResponseInterface | null;
  news: GetNewsResponse | null;
  notification: any[];
  report: {
    apbd: GetReportAPBDListResponseInterface | null;
    bumdes: any | null;
  };
  loading: Record<string, boolean>;
}
