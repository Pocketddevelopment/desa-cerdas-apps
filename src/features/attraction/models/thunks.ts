import {
  getCreativeDetail,
  getCreativeList,
  getDestinationDetail,
  getDestinationList,
} from '@attraction/services';
import { getSMEDetail, getSMEList } from '@attraction/services/sme.service';
import StoreConstants from '@constants/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@store/rootReducers';
import { sanitizeResponse } from '@utils/store';
import GetCreativeListRequestInterface from './interfaces/requests/GetCreativeListRequest.interface';
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

export const getSMEListThunk = createAsyncThunk(
  `${StoreConstants.ATTRACTION}/getSMEList`,
  async (page: number, { getState, rejectWithValue }) => {
    try {
      const { DistrictID } = (getState() as RootState).authentication.account;
      const response = sanitizeResponse(
        await getSMEList({
          districtId: DistrictID,
          page: page,
          pageSize: 10,
        })
      );
      response.page = page;
      return response;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const getSMEDetailThunk = createAsyncThunk(
  `${StoreConstants.ATTRACTION}/getSMEDetail`,
  async (id: string, { getState, rejectWithValue }) => {
    try {
      const { DistrictID } = (getState() as RootState).authentication.account;
      return sanitizeResponse(
        await getSMEDetail({
          districtid: DistrictID,
          umkmid: id,
        })
      );
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);
