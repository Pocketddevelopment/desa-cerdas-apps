import StoreConstants from '@constants/store';
import { createSlice } from '@reduxjs/toolkit';
import GlobalNetworking from '@services/request';
import { mapLoadingStates } from '@utils/store';
import MiscRedux from './interfaces/MiscRedux.interface';
import { getNewsListThunk } from './thunks';

const defaultInitialState: MiscRedux = {
  attraction: [],
  news: null,
  notification: [],
  report: [],
  loading: {},
};

const initialState: MiscRedux = {
  ...defaultInitialState,
  loading: mapLoadingStates(defaultInitialState),
};

const Model = createSlice({
  name: StoreConstants.PROFILE,
  initialState: initialState,
  reducers: {
    reset: (_, __) => {
      GlobalNetworking.clearAccessToken();
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    //Login handlers
    builder.addCase(getNewsListThunk.pending, (state: MiscRedux, action) => {
      return {
        ...state,
        loading: {
          [StoreConstants.NEWS]: false,
        },
      };
    });
    builder.addCase(
      getNewsListThunk.fulfilled,
      (state: MiscRedux, action: any) => {
        return {
          ...state,
          news: action.payload,
          loading: {
            [StoreConstants.NEWS]: false,
          },
        };
      }
    );
    builder.addCase(getNewsListThunk.rejected, (state: MiscRedux) => {
      return {
        ...state,
        loading: {
          [StoreConstants.NEWS]: false,
        },
      };
    });
  },
});

export default Model.reducer;
