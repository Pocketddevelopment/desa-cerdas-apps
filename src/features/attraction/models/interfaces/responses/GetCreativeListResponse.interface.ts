import { AttractionCreativeInterface } from '../AttractionCreative.interface';

export default interface GetCreativeListResponseInterface {
  ListCreativeDestination: AttractionCreativeInterface[];
  TotalPage: number;
  TotalRow: number;
}
