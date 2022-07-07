import News from '@news/models/interfaces/News.interface';

export default interface GetNewsResponse {
  ListNews: News[];
  TotalPage: number;
  TotalRow: number;
}
