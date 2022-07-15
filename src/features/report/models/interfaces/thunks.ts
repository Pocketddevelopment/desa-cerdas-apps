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
      return sanitizeResponse(
        await getReportAPBDList({
          districtId: DistrictID,
          page: page,
        })
      );
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
      return sanitizeResponse(
        await getReportBUMDesList({
          page,
          districtId: DistrictID,
        })
      );
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);
