import StoreConstants from '@constants/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDocumentHistoryList } from '@service/services';
import { RootState } from '@store/store';
import { sanitizeResponse } from '@utils/store';

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
