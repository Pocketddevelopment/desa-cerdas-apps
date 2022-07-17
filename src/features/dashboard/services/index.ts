import APIConstants from '@constants/api';
import GlobalNetworking from '@services/request';

export const getAirPollution = (id: string) => {
  return GlobalNetworking.get(APIConstants.DASHBOARD.WEATHER.URL, {
    districtId: id,
  });
};

export const getPrivacyPolicy = () => {
  return GlobalNetworking.get(
    APIConstants.DASHBOARD.PRIVACY_POLICY.URL,
    APIConstants.DASHBOARD.PRIVACY_POLICY.ADDITIONAL_PARAMS
  );
};

export const getTermsCondition = () => {
  return GlobalNetworking.get(
    APIConstants.DASHBOARD.TERMS_CONDITION.URL,
    APIConstants.DASHBOARD.TERMS_CONDITION.ADDITIONAL_PARAMS
  );
};
