import StoreConstants from '@constants/store';
import { getDistrictProfile } from '@profile/services';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import { sanitizeResponse } from '@utils/store';

export const getDistrictProfileThunk = createAsyncThunk(
  `${StoreConstants.PROFILE}/getDistrictProfile`,
  async (_, { getState, rejectWithValue }) => {
    const districtId = (getState() as RootState).authentication.account
      ?.DistrictID;
    try {
      const a = sanitizeResponse(await getDistrictProfile(districtId));
      console.log(a);
      return a;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);
