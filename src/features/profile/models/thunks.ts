import StoreConstants from '@constants/store';
import {
  getDistrictOrganizationStructure,
  getDistrictProfile,
} from '@profile/services';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import { sanitizeResponse } from '@utils/store';

export const getDistrictProfileThunk = createAsyncThunk(
  `${StoreConstants.PROFILE}/getDistrictProfile`,
  async (_, { getState, rejectWithValue }) => {
    const districtId = (getState() as RootState).authentication.account
      ?.DistrictID;
    try {
      return sanitizeResponse(await getDistrictProfile(districtId));
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const getDistrictOrganizationStructureThunk = createAsyncThunk(
  `${StoreConstants.PROFILE}/getDistrictOrganizationStructure`,
  async (_, { getState, rejectWithValue }) => {
    const districtId = (getState() as RootState).authentication.account
      ?.DistrictID;
    try {
      return sanitizeResponse(
        await getDistrictOrganizationStructure(districtId)
      ).ListStructure;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);
