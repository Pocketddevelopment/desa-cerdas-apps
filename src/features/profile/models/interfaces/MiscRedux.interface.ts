import StoreConstants from '@constants/store';
import News from '@news/models/interfaces/News.interface';
import GetNewsResponse from './responses/GetNewsResponse.interface';

export default interface MiscRedux {
  attraction: any[];
  news: GetNewsResponse | null;
  notification: any[];
  report: any[];
  loading: Record<string, boolean>;
}
