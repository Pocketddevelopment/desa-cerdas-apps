import StoreConstants from '@constants/store';
import { createSlice } from '@reduxjs/toolkit';
import { mapLoadingStates } from '@utils/store';
import ServiceRedux from './interfaces/ServiceRedux.interface';
import { getDocumentHistoryListThunk } from './thunks';

const defaultInitialState: ServiceRedux = {
  documentHistory: {
    ListAdministrationHistory: [],
    TotalPage: 1,
    TotalRow: 0,
  },
  loading: {},
};

const initialState: ServiceRedux = {
  ...defaultInitialState,
  loading: mapLoadingStates(defaultInitialState),
};

const Model = createSlice({
  name: StoreConstants.SERVICE,
  initialState: initialState,
  reducers: {
    reset: (_, __) => {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    //Get document history handlers
    builder.addCase(
      getDocumentHistoryListThunk.pending,
      (state: ServiceRedux) => {
        return {
          ...state,
          loading: {
            documentHistory: true,
          },
        };
      }
    );
    builder.addCase(
      getDocumentHistoryListThunk.fulfilled,
      (state: ServiceRedux, action: any) => {
        return {
          ...state,
          documentHistory: action.payload,
          loading: {
            documentHistory: false,
          },
        };
      }
    );
    builder.addCase(
      getDocumentHistoryListThunk.rejected,
      (state: ServiceRedux) => {
        return {
          ...state,
          loading: {
            documentHistory: false,
          },
        };
      }
    );
  },
});

export default Model.reducer;
