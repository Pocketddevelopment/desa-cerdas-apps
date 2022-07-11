import {
  getAttractionCreativeListThunk,
  getAttractionDestinationListThunk,
  getSMEDetailThunk,
  getSMEListThunk,
} from '@attraction/models/thunks';
import StoreConstants from '@constants/store';
import { createSlice } from '@reduxjs/toolkit';
import GlobalNetworking from '@services/request';
import { mapLoadingStates } from '@utils/store';
import { getReportAPBDListThunk } from '../../report/models/interfaces/thunks';
import MiscRedux from './interfaces/MiscRedux.interface';
import { getNewsDetailThunk, getNewsListThunk } from './thunks';

const defaultInitialState: MiscRedux = {
  creative: null,
  destination: null,
  sme: null,
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
    // News list handlers
    builder.addCase(getNewsListThunk.pending, (state: MiscRedux, action) => {
      return {
        ...state,
        loading: {
          [StoreConstants.NEWS]: true,
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

    // News detail handlers
    builder.addCase(getNewsDetailThunk.pending, (state: MiscRedux, action) => {
      return {
        ...state,
        loading: {
          [StoreConstants.NEWS]: true,
        },
      };
    });
    builder.addCase(
      getNewsDetailThunk.fulfilled,
      (state: MiscRedux, _: any) => {
        return {
          ...state,
          loading: {
            [StoreConstants.NEWS]: false,
          },
        };
      }
    );
    builder.addCase(getNewsDetailThunk.rejected, (state: MiscRedux) => {
      return {
        ...state,
        loading: {
          [StoreConstants.NEWS]: false,
        },
      };
    });

    // Tourist destination handlers
    builder.addCase(
      getAttractionDestinationListThunk.pending,
      (state: MiscRedux, _) => {
        return {
          ...state,
          loading: {
            destination: true,
          },
        };
      }
    );
    builder.addCase(
      getAttractionDestinationListThunk.fulfilled,
      (state: MiscRedux, action: any) => {
        return {
          ...state,
          destination: action.payload,
          loading: {
            destination: false,
          },
        };
      }
    );
    builder.addCase(
      getAttractionDestinationListThunk.rejected,
      (state: MiscRedux) => {
        return {
          ...state,
          loading: {
            destination: false,
          },
        };
      }
    );

    // Creative destination handlers
    builder.addCase(
      getAttractionCreativeListThunk.pending,
      (state: MiscRedux, _) => {
        return {
          ...state,
          loading: {
            creative: true,
          },
        };
      }
    );
    builder.addCase(
      getAttractionCreativeListThunk.fulfilled,
      (state: MiscRedux, action: any) => {
        return {
          ...state,
          creative: action.payload,
          loading: {
            creative: false,
          },
        };
      }
    );
    builder.addCase(
      getAttractionCreativeListThunk.rejected,
      (state: MiscRedux) => {
        return {
          ...state,
          loading: {
            creative: false,
          },
        };
      }
    );

    // SME List handlers
    builder.addCase(getSMEListThunk.pending, (state: MiscRedux, _) => {
      return {
        ...state,
        loading: {
          sme: true,
        },
      };
    });
    builder.addCase(
      getSMEListThunk.fulfilled,
      (state: MiscRedux, action: any) => {
        return {
          ...state,
          sme: {
            ...state.sme!,
            ListUMKM: [
              ...(state.sme?.ListUMKM || []),
              ...action.payload.ListUMKM,
            ],
          },
          loading: {
            sme: false,
          },
        };
      }
    );
    builder.addCase(getSMEListThunk.rejected, (state: MiscRedux) => {
      return {
        ...state,
        loading: {
          sme: false,
        },
      };
    });

    // SME Detail handlers
    builder.addCase(getSMEDetailThunk.pending, (state: MiscRedux, _) => {
      return {
        ...state,
        loading: {
          sme: true,
        },
      };
    });
    builder.addCase(getSMEDetailThunk.fulfilled, (state: MiscRedux, _: any) => {
      return {
        ...state,
        loading: {
          sme: false,
        },
      };
    });
    builder.addCase(getSMEDetailThunk.rejected, (state: MiscRedux) => {
      return {
        ...state,
        loading: {
          sme: false,
        },
      };
    });

    // Report APBD List Detail handlers
    builder.addCase(getReportAPBDListThunk.pending, (state: MiscRedux, _) => {
      return {
        ...state,
        loading: {
          report: true,
        },
      };
    });
    builder.addCase(
      getReportAPBDListThunk.fulfilled,
      (state: MiscRedux, action: any) => {
        return {
          ...state,
          report: {
            ...state.report,
            apbd: action.payload,
          },
          loading: {
            report: false,
          },
        };
      }
    );
    builder.addCase(getReportAPBDListThunk.rejected, (state: MiscRedux) => {
      return {
        ...state,
        loading: {
          report: false,
        },
      };
    });
  },
});

export default Model.reducer;
