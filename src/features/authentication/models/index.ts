import { createSlice } from '@reduxjs/toolkit';
import { mapLoadingStates } from '@utils/store';
import AuthenticationRedux from './interfaces/AuthenticationRedux.interface';
import { loginThunk } from './thunks';

let defaultInitialState: AuthenticationRedux = {
  account: null,
};

const initialState: AuthenticationRedux = {
  ...defaultInitialState,
  loading: mapLoadingStates(defaultInitialState),
};

const Model = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      loginThunk.fulfilled,
      (state: AuthenticationRedux, action) => {
        return {
          ...state,
          account: action.payload,
        };
      }
    );
  },
});

export default Model.reducer;
