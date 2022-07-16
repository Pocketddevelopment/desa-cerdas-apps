import StoreConstants from '@constants/store';
import { getNotificationList, readnotification } from '@notification/services';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import { sanitizeResponse } from '@utils/store';

export const getNotificationListThunk = createAsyncThunk(
  `${StoreConstants.MISC}/getNotificationList`,
  async (page: number, { getState, rejectWithValue }) => {
    try {
      const { CustomerID } = (getState() as RootState).authentication.account;
      return sanitizeResponse(await getNotificationList(CustomerID, page));
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export const readNotificationThunk = createAsyncThunk(
  `${StoreConstants.MISC}/readNotification`,
  async (id: string, { rejectWithValue }) => {
    try {
      return readnotification(id);
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);
