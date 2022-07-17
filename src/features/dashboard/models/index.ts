import {
  getAttractionCreativeListThunk,
  getAttractionDestinationListThunk,
  getSMEDetailThunk,
  getSMEListThunk,
} from '@attraction/models/thunks';
import StoreConstants from '@constants/store';
import { getNotificationListThunk } from '@notification/models/thunks';
import { createSlice } from '@reduxjs/toolkit';
import GlobalNetworking from '@services/request';
import { mapLoadingStates } from '@utils/store';
import {
  getReportAPBDListThunk,
  getReportBUMDesListThunk,
} from '../../report/models/interfaces/thunks';
import MiscRedux from './interfaces/MiscRedux.interface';
import {
  getAirPollutionThunk,
  getNewsDetailThunk,
  getNewsListThunk,
  getPrivacyPolicyThunk,
  getTermsConditionThunk,
} from './thunks';

const defaultInitialState: MiscRedux = {
  weather: null,
  creative: null,
  destination: null,
  sme: null,
  news: {
    ListNews: [],
    TotalPage: 1,
    TotalRow: 0,
  },
  notification: {
    ListInbox: [],
    TotalPage: 1,
    TotalRow: 0,
  },
  report: {
    apbd: null,
    bumdes: {
      ListReportBumdes: [],
      TotalPage: 1,
      TotalRow: 0,
    },
  },
  loading: {},
};

const initialState: MiscRedux = {
  ...defaultInitialState,
  loading: mapLoadingStates(defaultInitialState),
};

const Model = createSlice({
  name: StoreConstants.MISC,
  initialState: initialState,
  reducers: {
    reset: (_, __) => {
      GlobalNetworking.clearAccessToken();
      return {
        ...initialState,
      };
    },
    readNotification: (state, payload) => {
      const readIndex = state.notification.ListInbox.findIndex(
        (e) => e.ID === payload.payload
      );
      if (readIndex > -1) {
        state.notification.ListInbox[readIndex].IsRead = true;
      }
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

    // Report BUMDes List Detail handlers
    builder.addCase(getReportBUMDesListThunk.pending, (state: MiscRedux, _) => {
      return {
        ...state,
        loading: {
          bumdes: true,
        },
      };
    });
    builder.addCase(
      getReportBUMDesListThunk.fulfilled,
      (state: MiscRedux, action: any) => {
        return {
          ...state,
          report: {
            ...state.report,
            bumdes: action.payload,
          },
          loading: {
            bumdes: false,
          },
        };
      }
    );
    builder.addCase(getReportBUMDesListThunk.rejected, (state: MiscRedux) => {
      return {
        ...state,
        loading: {
          bumdes: false,
        },
      };
    });

    // Get notification list handlers
    builder.addCase(getNotificationListThunk.pending, (state: MiscRedux, _) => {
      return {
        ...state,
        loading: {
          notification: true,
        },
      };
    });
    builder.addCase(
      getNotificationListThunk.fulfilled,
      (state: MiscRedux, action: any) => {
        return {
          ...state,
          notification: {
            ...state.notification,
            ListInbox: [
              ...state.notification.ListInbox,
              ...action.payload.ListInbox,
            ],
          },
          loading: {
            notification: false,
          },
        };
      }
    );
    builder.addCase(getNotificationListThunk.rejected, (state: MiscRedux) => {
      return {
        ...state,
        loading: {
          notification: false,
        },
      };
    });

    // Get air pollution handlers
    builder.addCase(getAirPollutionThunk.pending, (state: MiscRedux, _) => {
      return {
        ...state,
        loading: {
          weather: true,
        },
      };
    });
    builder.addCase(
      getAirPollutionThunk.fulfilled,
      (state: MiscRedux, action: any) => {
        return {
          ...state,
          weather: action.payload,
          loading: {
            weather: false,
          },
        };
      }
    );
    builder.addCase(getAirPollutionThunk.rejected, (state: MiscRedux) => {
      return {
        ...state,
        loading: {
          weather: false,
        },
      };
    });

    // Get privacy policy handlers
    builder.addCase(getPrivacyPolicyThunk.pending, (state: MiscRedux, _) => {
      return {
        ...state,
        loading: {
          pp: true,
        },
      };
    });
    builder.addCase(
      getPrivacyPolicyThunk.fulfilled,
      (state: MiscRedux, action: any) => {
        return {
          ...state,
          weather: action.payload,
          loading: {
            pp: false,
          },
        };
      }
    );
    builder.addCase(getPrivacyPolicyThunk.rejected, (state: MiscRedux) => {
      return {
        ...state,
        loading: {
          pp: false,
        },
      };
    });

    // Get terms condition handlers
    builder.addCase(getTermsConditionThunk.pending, (state: MiscRedux) => {
      return {
        ...state,
        loading: {
          tnc: true,
        },
      };
    });
    builder.addCase(getTermsConditionThunk.fulfilled, (state: MiscRedux) => {
      return {
        ...state,
        loading: {
          tnc: false,
        },
      };
    });
    builder.addCase(getTermsConditionThunk.rejected, (state: MiscRedux) => {
      return {
        ...state,
        loading: {
          tnc: false,
        },
      };
    });
  },
});

export default Model.reducer;
