import DistrictProfileInterface from './DistrictProfile.interface';
import EducationStatisticInterface from './EducationStatistic.interface';
import PlacemanInterface from './Placeman.interface';
import GetEventListResponseInterface from './responses/GetEventListResponse.interface';

export default interface ProfileRedux {
  profile: DistrictProfileInterface;
  structure: PlacemanInterface[];
  events: GetEventListResponseInterface;
  statistic: {
    population: EducationStatisticInterface[];
    education: [EducationStatisticInterface[]];
  };
  loading: Record<string, boolean>;
}
