import StoreConstants from '@constants/store';
import { createSlice } from '@reduxjs/toolkit';
import { mapLoadingStates } from '@utils/store';
import ServiceRedux from './interfaces/ServiceRedux.interface';
import {
  createComplaintThunk,
  getComplaintDetailThunk,
  getComplaintListThunk,
  getDocumentFormFormatThunk,
  getDocumentHistoryListThunk,
  requestDocumentThunk,
  updateCommentThunk,
} from './thunks';

const defaultInitialState: ServiceRedux = {
  documentHistory: {
    ListAdministrationHistory: [],
    TotalPage: 1,
    TotalRow: 0,
  },
  documentFormat: [],
  complaintList: {
    ListSelfComplaint: [],
    ListComplaint: [],
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

    //Request document handlers
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

    //Get complaint list handlers
    builder.addCase(getComplaintListThunk.pending, (state: ServiceRedux) => {
      return {
        ...state,
        loading: {
          complaintList: true,
        },
      };
    });
    builder.addCase(
      getComplaintListThunk.fulfilled,
      (state: ServiceRedux, action: any) => {
        let newComplaintList = [];
        if (action.payload.page === 1) {
          newComplaintList = action.payload;
        } else {
          newComplaintList = [state.complaintList, ...action.payload];
        }
        return {
          ...state,
          complaintList: newComplaintList,
          loading: {
            complaintList: false,
          },
        };
      }
    );
    builder.addCase(getComplaintListThunk.rejected, (state: ServiceRedux) => {
      return {
        ...state,
        loading: {
          complaintList: false,
        },
      };
    });

    //Get complaint detail handlers
    builder.addCase(getComplaintDetailThunk.pending, (state: ServiceRedux) => {
      return {
        ...state,
        loading: {
          complaintDetail: true,
        },
      };
    });
    builder.addCase(
      getComplaintDetailThunk.fulfilled,
      (state: ServiceRedux, _: any) => {
        return {
          ...state,
          loading: {
            complaintDetail: false,
          },
        };
      }
    );
    builder.addCase(getComplaintDetailThunk.rejected, (state: ServiceRedux) => {
      return {
        ...state,
        loading: {
          complaintDetail: false,
        },
      };
    });

    //Get complaint detail handlers
    builder.addCase(updateCommentThunk.pending, (state: ServiceRedux) => {
      return {
        ...state,
        loading: {
          updateComment: true,
        },
      };
    });
    builder.addCase(
      updateCommentThunk.fulfilled,
      (state: ServiceRedux, _: any) => {
        return {
          ...state,
          loading: {
            updateComment: false,
          },
        };
      }
    );
    builder.addCase(updateCommentThunk.rejected, (state: ServiceRedux) => {
      return {
        ...state,
        loading: {
          updateComment: false,
        },
      };
    });

    //Get complaint detail handlers
    builder.addCase(createComplaintThunk.pending, (state: ServiceRedux) => {
      return {
        ...state,
        loading: {
          createComplaint: true,
        },
      };
    });
    builder.addCase(
      createComplaintThunk.fulfilled,
      (state: ServiceRedux, _: any) => {
        return {
          ...state,
          loading: {
            createComplaint: false,
          },
        };
      }
    );
    builder.addCase(createComplaintThunk.rejected, (state: ServiceRedux) => {
      return {
        ...state,
        loading: {
          createComplaint: false,
        },
      };
    });
  },
});

export default Model.reducer;
