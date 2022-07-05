import StoreConstants from '@constants/store';
import { createSlice } from '@reduxjs/toolkit';
import GlobalNetworking from '@services/request';
import Storage from '@utils/async-storage';
import { mapLoadingStates } from '@utils/store';
import AuthenticationRedux from './interfaces/AuthenticationRedux.interface';
import { loginThunk } from './thunks';

const defaultInitialState: AuthenticationRedux = {
  account: null,
  loading: {},
};

const initialState: AuthenticationRedux = {
  ...defaultInitialState,
  loading: mapLoadingStates(defaultInitialState),
};

const Model = createSlice({
  name: 'authentication',
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
    builder.addCase(
      loginThunk.pending,
      (state: AuthenticationRedux, action) => {
        return {
          ...state,
          loading: {
            account: true,
          },
        };
      }
    );
    builder.addCase(
      loginThunk.fulfilled,
      (state: AuthenticationRedux, action: any) => {
        GlobalNetworking.setAccessToken(action.payload.accessToken);
        Storage.setItem(
          StoreConstants.REFRESH_TOKEN,
          action.payload.accessToken
        );
        return {
          ...state,
          account: action.payload,
          loading: {
            account: false,
          },
        };
      }
    );
    builder.addCase(loginThunk.rejected, (state: AuthenticationRedux) => {
      return {
        ...state,
        loading: {
          account: false,
        },
      };
    });
  },
});

export default Model.reducer;
