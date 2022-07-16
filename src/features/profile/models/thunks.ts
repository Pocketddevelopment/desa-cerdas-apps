import StoreConstants from '@constants/store';
import {
  getDistrictOrganizationStructure,
  getDistrictProfile,
  getEducationStatistic,
  getEventDetail,
  getEventList,
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

export const getEventListThunk = createAsyncThunk(
  `${StoreConstants.PROFILE}/getEventList`,
  async (page: number, { getState, rejectWithValue }) => {
    const { DistrictID } = (getState() as RootState).authentication.account;
    try {
      return sanitizeResponse(
        await getEventList({
          page,
          districtId: DistrictID,
        })
      );
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const getEventDetailThunk = createAsyncThunk(
  `${StoreConstants.PROFILE}/getEventDetail`,
  async (id: string, { rejectWithValue }) => {
    try {
      return sanitizeResponse(await getEventDetail(id));
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const getEducationStatisticThunk = createAsyncThunk(
  `${StoreConstants.PROFILE}/getEducationStatistic`,
  async (_, { getState, rejectWithValue }) => {
    const { DistrictID } = (getState() as RootState).authentication.account;
    try {
      const data = sanitizeResponse(
        await getEducationStatistic(DistrictID)
      ).ListEducation;

      const newData = [];
      // Chunk array to 2 for rendering
      const chunkSize = 2;
      for (let i = 0; i < data.length; i += chunkSize) {
        const chunk = data.slice(i, i + chunkSize);
        newData.push(chunk);
      }
      return newData;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);
