import DistrictProfileInterface from './DistrictProfile.interface';
import PlacemanInterface from './Placeman.interface';

export default interface ProfileRedux {
  profile: DistrictProfileInterface;
  structure: PlacemanInterface[];
  loading: Record<string, boolean>;
}
