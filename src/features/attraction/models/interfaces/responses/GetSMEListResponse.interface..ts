import { SMEInterface } from '../SME.interface';

export default interface GetSMEListResponseInterface {
  ListUMKM: SMEInterface[];
  TotalPage: number;
  TotalRow: number;
}
