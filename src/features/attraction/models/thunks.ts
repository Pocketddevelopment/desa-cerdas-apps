import {
  getCreativeDetail,
  getCreativeList,
  getDestinationDetail,
  getDestinationList,
} from '@attraction/services';
import StoreConstants from '@constants/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@store/rootReducers';
import { sanitizeResponse } from '@utils/store';
import GetCreativeListRequestInterface from './interfaces/requests/GetCreativeListRequest.interface';
import GetDestinationDetailInterface from './interfaces/requests/GetDestinationDetail.interface';
import GetDestinationListRequestInterface from './interfaces/requests/GetDestinationListRequest.interface';

export const getAttractionDestinationListThunk = createAsyncThunk(
  `${StoreConstants.ATTRACTION}/getDestinationList`,
  async (
    { page, pageSize }: GetDestinationListRequestInterface,
    { getState, rejectWithValue }
  ) => {
    try {
      const { DistrictID } = (getState() as RootState).authentication.account;
      return sanitizeResponse(
        await getDestinationList(DistrictID, page, pageSize)
      );
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const getAttractionCreativeListThunk = createAsyncThunk(
  `${StoreConstants.ATTRACTION}/getCreativeList`,
  async (
    { page, pageSize }: GetCreativeListRequestInterface,
    { getState, rejectWithValue }
  ) => {
    try {
      const { DistrictID } = (getState() as RootState).authentication.account;
      return sanitizeResponse(
        await getCreativeList(DistrictID, page, pageSize)
      );
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const getAttractionDestinationDetailThunk = createAsyncThunk(
  `${StoreConstants.ATTRACTION}/getDestinationDetail`,
  async (id: string, { getState, rejectWithValue }) => {
    try {
      const { DistrictID } = (getState() as RootState).authentication.account;
      return sanitizeResponse(
        await getDestinationDetail({
          districtid: DistrictID,
          touristdestinationid: id,
        })
      );
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const getAttractionCreativeDetailThunk = createAsyncThunk(
  `${StoreConstants.ATTRACTION}/getCreativeDetail`,
  async (id: string, { getState, rejectWithValue }) => {
    try {
      const { DistrictID } = (getState() as RootState).authentication.account;
      return sanitizeResponse(
        await getCreativeDetail({
          districtid: DistrictID,
          creativedestinationid: id,
        })
      );
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);
