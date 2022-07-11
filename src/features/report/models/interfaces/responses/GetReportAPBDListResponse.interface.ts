import ReportAPBDInterface from '../ReportAPBD.interface';

export default interface GetReportAPBDListResponseInterface {
  ListReportAPBD: ReportAPBDInterface[];
  TotalPage: number;
  TotalRow: number;
}
