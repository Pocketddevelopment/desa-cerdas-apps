import GetReportAPBDListResponseInterface from '@@@/src/features/report/models/interfaces/responses/GetReportAPBDListResponse.interface';
import GetCreativeListResponseInterface from '@attraction/models/interfaces/responses/GetCreativeListResponse.interface';
import GetDestinationListResponseInterface from '@attraction/models/interfaces/responses/GetDestinationListResponse.interface';
import GetSMEListResponseInterface from '@attraction/models/interfaces/responses/GetSMEListResponse.interface.';
import GetNotificationListResponseInterface from '@notification/models/interfaces/responses/GetNotificationListResponse.interface';
import GetReportBUMDesListResponseInterface from '@report/models/interfaces/responses/GetReportBUMDesListResponse.interface';
import GetNewsResponse from './responses/GetNewsResponse.interface';
import WeatherInterface from './Weather.interface';

export default interface MiscRedux {
  destination: GetDestinationListResponseInterface;
  creative: GetCreativeListResponseInterface;
  sme: GetSMEListResponseInterface;
  news: GetNewsResponse;
  notification: GetNotificationListResponseInterface;
  report: {
    apbd: GetReportAPBDListResponseInterface;
    bumdes: GetReportBUMDesListResponseInterface;
  };
  weather: WeatherInterface | null;
  loading: Record<string, boolean>;
  error: Record<string, boolean>;
}
