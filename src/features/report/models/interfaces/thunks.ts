import StoreConstants from '@constants/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import { sanitizeResponse } from '@utils/store';
import { getReportAPBDList, getReportBUMDesList } from '../../services';

export const getReportAPBDListThunk = createAsyncThunk(
  `${StoreConstants.REPORT}/getReportAPBDList`,
  async (page: number, { getState, rejectWithValue }) => {
    try {
      const { DistrictID } = (getState() as RootState).authentication.account;
      const response = sanitizeResponse(
        await getReportAPBDList({
          districtId: DistrictID,
          page: page,
        })
      );
      response.page = page;
      return response;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const getReportBUMDesListThunk = createAsyncThunk(
  `${StoreConstants.REPORT}/getReportBUMDes`,
  async (page: number, { getState, rejectWithValue }) => {
    const { DistrictID } = (getState() as RootState).authentication.account;
    try {
      const response = sanitizeResponse(
        await getReportBUMDesList({
          page,
          districtId: DistrictID,
        })
      );
      response.page = page;
      return response;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);
