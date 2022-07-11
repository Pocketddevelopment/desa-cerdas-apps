import { combineReducers } from '@reduxjs/toolkit';
import reducerAuthentication from '@authentication/models';
import reducerMisc from '@profile/models';
import reducerService from '@service/models';

const rootReducers = combineReducers({
  authentication: reducerAuthentication,
  service: reducerService,
  misc: reducerMisc,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
