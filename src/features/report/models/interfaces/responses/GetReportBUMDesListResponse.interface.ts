import ReportBUMDesInterface from '../ReportBUMDes.interface';

export default interface GetReportBUMDesListResponseInterface {
  ListReportBumdes: ReportBUMDesInterface[];
  TotalPage: number;
  TotalRow: number;
}
