import APIConstants from '@constants/api';
import GlobalNetworking from '@services/request';

export const getDistrictProfile = (id: string) => {
  return GlobalNetworking.get(APIConstants.PROFILE.PROFILE.URL, {
    districtId: id,
  });
};

export const getDistrictOrganizationStructure = (id: string) => {
  return GlobalNetworking.get(APIConstants.PROFILE.STRUCTURE.URL, {
    districtId: id,
  });
};
