import DistrictProfileInterface from './DistrictProfile.interface';
import PlacemanInterface from './Placeman.interface';
import GetEventListResponseInterface from './responses/GetEventListResponse.interface';

export default interface ProfileRedux {
  profile: DistrictProfileInterface;
  structure: PlacemanInterface[];
  events: GetEventListResponseInterface;
  loading: Record<string, boolean>;
}
