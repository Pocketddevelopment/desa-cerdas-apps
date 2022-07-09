import { AttractionDestinationInterface } from '../AttractionDestination.interface';

export default interface GetDestinationListResponseInterface {
  ListTouristDestination: AttractionDestinationInterface[];
  TotalPage: number;
  TotalRow: number;
}
