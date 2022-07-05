import { createSlice } from '@reduxjs/toolkit';
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
  reducers: {},
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
      (state: AuthenticationRedux, action) => {
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
