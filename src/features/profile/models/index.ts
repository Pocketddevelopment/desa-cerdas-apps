import StoreConstants from '@constants/store';
import { createSlice } from '@reduxjs/toolkit';
import GlobalNetworking from '@services/request';
import { mapLoadingStates } from '@utils/store';
import ProfileRedux from './interfaces/ProfileRedux.interface';
import {
  getDistrictOrganizationStructureThunk,
  getDistrictProfileThunk,
  getEventDetailThunk,
  getEventListThunk,
} from './thunks';

const defaultInitialState: ProfileRedux = {
  profile: {
    Description: '',
    DistrictID: '',
    Icon: '',
    Latitude: 0,
    Longitude: 0,
    MapURL: '',
    StructureOrganizationURL: '',
  },
  structure: [],
  events: {
    ListEvent: [],
    TotalPage: 1,
    TotalRow: 0,
  },
  loading: {},
};

const initialState: ProfileRedux = {
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
    //Get district profile handlers
    builder.addCase(getDistrictProfileThunk.pending, (state: ProfileRedux) => {
      return {
        ...state,
        loading: {
          getDistrictProfile: true,
        },
      };
    });
    builder.addCase(
      getDistrictProfileThunk.fulfilled,
      (state: ProfileRedux, action: any) => {
        return {
          ...state,
          profile: action.payload,
          loading: {
            getDistrictProfile: false,
          },
        };
      }
    );
    builder.addCase(getDistrictProfileThunk.rejected, (state: ProfileRedux) => {
      return {
        ...state,
        loading: {
          getDistrictProfile: false,
        },
      };
    });

    //Get organization structure handlers
    builder.addCase(
      getDistrictOrganizationStructureThunk.pending,
      (state: ProfileRedux) => {
        return {
          ...state,
          loading: {
            getDistrictOrganizationStructure: true,
          },
        };
      }
    );
    builder.addCase(
      getDistrictOrganizationStructureThunk.fulfilled,
      (state: ProfileRedux, action: any) => {
        return {
          ...state,
          structure: action.payload,
          loading: {
            getDistrictOrganizationStructure: false,
          },
        };
      }
    );
    builder.addCase(
      getDistrictOrganizationStructureThunk.rejected,
      (state: ProfileRedux) => {
        return {
          ...state,
          loading: {
            getDistrictOrganizationStructure: false,
          },
        };
      }
    );

    //Get event list handlers
    builder.addCase(getEventListThunk.pending, (state: ProfileRedux) => {
      return {
        ...state,
        loading: {
          getEventList: true,
        },
      };
    });
    builder.addCase(
      getEventListThunk.fulfilled,
      (state: ProfileRedux, action: any) => {
        return {
          ...state,
          events: action.payload,
          loading: {
            getEventList: false,
          },
        };
      }
    );
    builder.addCase(getEventListThunk.rejected, (state: ProfileRedux) => {
      return {
        ...state,
        loading: {
          getEventList: false,
        },
      };
    });

    //Get event detail handlers
    builder.addCase(getEventDetailThunk.pending, (state: ProfileRedux) => {
      return {
        ...state,
        loading: {
          getEventDetail: true,
        },
      };
    });
    builder.addCase(
      getEventDetailThunk.fulfilled,
      (state: ProfileRedux, _: any) => {
        return {
          ...state,
          loading: {
            getEventDetail: false,
          },
        };
      }
    );
    builder.addCase(getEventDetailThunk.rejected, (state: ProfileRedux) => {
      return {
        ...state,
        loading: {
          getEventDetail: false,
        },
      };
    });
  },
});

export default Model.reducer;
