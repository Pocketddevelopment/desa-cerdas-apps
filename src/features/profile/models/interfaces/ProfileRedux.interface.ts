import DistrictProfileInterface from './DistrictProfile.interface';

export default interface ProfileRedux {
  profile: DistrictProfileInterface;
  loading: Record<string, boolean>;
}
