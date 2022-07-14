import StoreConstants from '@constants/store';
import { createSlice } from '@reduxjs/toolkit';
import GlobalNetworking from '@services/request';
import { mapLoadingStates } from '@utils/store';
import ProfileRedux from './interfaces/ProfileRedux.interface';
import { getDistrictProfileThunk } from './thunks';

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
  },
});

export default Model.reducer;
