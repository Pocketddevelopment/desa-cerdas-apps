import StoreConstants from '@constants/store';
import { createSlice } from '@reduxjs/toolkit';
import { mapLoadingStates } from '@utils/store';
import ServiceRedux from './interfaces/ServiceRedux.interface';
import {
  getDocumentFormFormatThunk,
  getDocumentHistoryListThunk,
  requestDocumentThunk,
} from './thunks';

const defaultInitialState: ServiceRedux = {
  documentHistory: {
    ListAdministrationHistory: [],
    TotalPage: 1,
    TotalRow: 0,
  },
  documentFormat: [],
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

    //Get document form format handlers
    builder.addCase(
      getDocumentFormFormatThunk.pending,
      (state: ServiceRedux) => {
        return {
          ...state,
          loading: {
            documentFormat: true,
          },
        };
      }
    );
    builder.addCase(
      getDocumentFormFormatThunk.fulfilled,
      (state: ServiceRedux, action: any) => {
        return {
          ...state,
          documentFormat: action.payload,
          loading: {
            documentFormat: false,
          },
        };
      }
    );
    builder.addCase(
      getDocumentFormFormatThunk.rejected,
      (state: ServiceRedux) => {
        return {
          ...state,
          loading: {
            documentFormat: false,
          },
        };
      }
    );

    //Get document form format handlers
    builder.addCase(requestDocumentThunk.pending, (state: ServiceRedux) => {
      return {
        ...state,
        loading: {
          requestDocument: true,
        },
      };
    });
    builder.addCase(
      requestDocumentThunk.fulfilled,
      (state: ServiceRedux, _: any) => {
        return {
          ...state,
          loading: {
            requestDocument: false,
          },
        };
      }
    );
    builder.addCase(requestDocumentThunk.rejected, (state: ServiceRedux) => {
      return {
        ...state,
        loading: {
          requestDocument: false,
        },
      };
    });
  },
});

export default Model.reducer;