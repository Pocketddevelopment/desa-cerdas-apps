import StoreConstants from '@constants/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getComplaintDetail,
  getComplaintList,
  getDocumentFormat,
  getDocumentHistoryList,
  putComplaintComment,
  requestDocument,
} from '@service/services';
import { RootState } from '@store/store';
import { sanitizeResponse } from '@utils/store';
import RequestDocumentThunkPayloadInterface from './interfaces/requests/RequestDocumentThunkPayload.interface';
import UpdateCommentThunkPayloadInterface from './interfaces/requests/UpdateCommentThunkPayload.interface';

export const getDocumentHistoryListThunk = createAsyncThunk(
  `${StoreConstants.SERVICE}/getDocumentHistoryList`,
  async (page: number, { getState, rejectWithValue }) => {
    try {
      const { CustomerID, DistrictID } = (getState() as RootState)
        .authentication.account;
      return sanitizeResponse(
        await getDocumentHistoryList({
          customerId: CustomerID,
          districtId: DistrictID,
          page: page,
        })
      );
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const getDocumentFormFormatThunk = createAsyncThunk(
  `${StoreConstants.SERVICE}/getDocumentFormFormat`,
  async (_, { getState, rejectWithValue }) => {
    try {
      const { DistrictID } = (getState() as RootState).authentication.account;
      return sanitizeResponse(await getDocumentFormat(DistrictID))
        .ListAdministration;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const requestDocumentThunk = createAsyncThunk(
  `${StoreConstants.SERVICE}/requestDocument`,
  async (
    payload: RequestDocumentThunkPayloadInterface,
    { getState, rejectWithValue }
  ) => {
    try {
      const { CustomerID, DistrictID } = (getState() as RootState)
        .authentication.account;
      return await requestDocument({
        CustomerID,
        DistrictID,
        ...payload,
      });
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const getComplaintListThunk = createAsyncThunk(
  `${StoreConstants.SERVICE}/getComplaintList`,
  async (page: number, { getState, rejectWithValue }) => {
    try {
      const { DistrictID } = (getState() as RootState).authentication.account;
      return sanitizeResponse(
        await getComplaintList({
          districtId: DistrictID,
          page,
        })
      );
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const getComplaintDetailThunk = createAsyncThunk(
  `${StoreConstants.SERVICE}/getComplaintDetail`,
  async (id: string, { getState, rejectWithValue }) => {
    try {
      const { CustomerID } = (getState() as RootState).authentication.account;
      return sanitizeResponse(
        await getComplaintDetail({
          customerId: CustomerID,
          complaintId: id,
        })
      );
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const updateCommentThunk = createAsyncThunk(
  `${StoreConstants.SERVICE}/updateComment`,
  async (
    params: UpdateCommentThunkPayloadInterface,
    { getState, rejectWithValue }
  ) => {
    try {
      const { CustomerID, DistrictID } = (getState() as RootState)
        .authentication.account;
      return sanitizeResponse(
        await putComplaintComment({
          customerId: CustomerID,
          districtId: DistrictID,
          ...params,
        })
      );
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);
