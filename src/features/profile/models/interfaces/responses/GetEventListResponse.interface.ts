import EventInterface from '../Event.interface';

export default interface GetEventListResponseInterface {
  ListEvent: EventInterface[];
  TotalPage: number;
  TotalRow: number;
}
