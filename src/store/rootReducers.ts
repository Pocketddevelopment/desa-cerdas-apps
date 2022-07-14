import { combineReducers } from '@reduxjs/toolkit';
import reducerAuthentication from '@authentication/models';
import reducerMisc from '@dashboard/models';
import reducerProfile from '@profile/models';
import reducerService from '@service/models';

const rootReducers = combineReducers({
  authentication: reducerAuthentication,
  service: reducerService,
  profile: reducerProfile,
  misc: reducerMisc,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
