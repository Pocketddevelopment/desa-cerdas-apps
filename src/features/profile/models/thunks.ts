import StoreConstants from '@constants/store';
import { getNewsList } from '@news/services';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import { sanitizeResponse } from '@utils/store';

export const getNewsListThunk = createAsyncThunk(
  `${StoreConstants.PROFILE}/login`,
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
