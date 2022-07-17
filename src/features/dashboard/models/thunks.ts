import StoreConstants from '@constants/store';
import {
  getAirPollution,
  getPrivacyPolicy,
  getTermsCondition,
} from '@dashboard/services';
import { getNewsDetail, getNewsList } from '@news/services';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import { sanitizeResponse } from '@utils/store';

export const getNewsListThunk = createAsyncThunk(
  `${StoreConstants.NEWS}/getList`,
  async (page: number, { getState, rejectWithValue }) => {
    const districtId = (getState() as RootState).authentication.account
      ?.DistrictID;
    try {
      return sanitizeResponse(await getNewsList(districtId as string, page));
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const getNewsDetailThunk = createAsyncThunk(
  `${StoreConstants.NEWS}/getDetail`,
  async (newsId: string, { getState, rejectWithValue }) => {
    const districtId = (getState() as RootState).authentication.account
      ?.DistrictID;
    const params = {
      newsId: newsId,
      districtId: districtId || '',
    };
    try {
      return sanitizeResponse(await getNewsDetail(params));
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const getAirPollutionThunk = createAsyncThunk(
  `${StoreConstants.MISC}/getAirPollution`,
  async (_, { getState, rejectWithValue }) => {
    const { DistrictID } = (getState() as RootState).authentication.account;
    try {
      return sanitizeResponse(await getAirPollution(DistrictID));
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const getPrivacyPolicyThunk = createAsyncThunk(
  `${StoreConstants.MISC}/getPrivacyPolicy`,
  async (_, { rejectWithValue }) => {
    try {
      return sanitizeResponse(await getPrivacyPolicy());
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const getTermsConditionThunk = createAsyncThunk(
  `${StoreConstants.MISC}/getTermsCondition`,
  async (_, { rejectWithValue }) => {
    try {
      return sanitizeResponse(await getTermsCondition());
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);
