import StoreConstants from '@constants/store';
import { createSlice } from '@reduxjs/toolkit';
import GlobalNetworking from '@services/request';
import Storage from '@utils/async-storage';
import { mapLoadingStates } from '@utils/store';
import AuthenticationRedux from './interfaces/AuthenticationRedux.interface';
import { loginThunk, refreshTokenThunk, updateAccountThunk } from './thunks';

const defaultInitialState: AuthenticationRedux = {
  account: null,
  loading: {},
};

const initialState: AuthenticationRedux = {
  ...defaultInitialState,
  loading: mapLoadingStates(defaultInitialState),
};

const Model = createSlice({
  name: StoreConstants.AUTH,
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
        GlobalNetworking.setAccessToken(action.payload.Token);
        Storage.setItem(
          StoreConstants.REFRESH_TOKEN,
          action.payload.RefreshToken
        );
        delete action.payload.Token;
        delete action.payload.RefreshToken;
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

    //Token handlers
    builder.addCase(
      refreshTokenThunk.pending,
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
      refreshTokenThunk.fulfilled,
      (state: AuthenticationRedux, action: any) => {
        GlobalNetworking.setAccessToken(action.payload.Token);
        return {
          ...state,
          loading: {
            account: false,
          },
        };
      }
    );
    builder.addCase(
      refreshTokenThunk.rejected,
      (state: AuthenticationRedux) => {
        return {
          ...state,
          loading: {
            account: false,
          },
        };
      }
    );

    //Update account handlers
    builder.addCase(
      updateAccountThunk.pending,
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
      updateAccountThunk.fulfilled,
      (state: AuthenticationRedux, action: any) => {
        return {
          ...state,
          loading: {
            account: false,
          },
        };
      }
    );
    builder.addCase(
      updateAccountThunk.rejected,
      (state: AuthenticationRedux) => {
        return {
          ...state,
          loading: {
            account: false,
          },
        };
      }
    );
  },
});

export default Model.reducer;
