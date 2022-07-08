import APIConstants from '@constants/api';
import GlobalNetworking from '@services/request';

export const getNewsList = (id: string, page: number) => {
  return GlobalNetworking.get(APIConstants.NEWS.LIST.URL, {
    districtid: id,
    page,
    pagesize: 10,
  });
};

export const getNewsDetail = (params: Record<string, string>) => {
  return GlobalNetworking.get(APIConstants.NEWS.DETAIL.URL, params);
};
