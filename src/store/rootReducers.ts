import { combineReducers } from '@reduxjs/toolkit';
import reducerAuthentication from '@authentication/models';
import reducerMisc from '@profile/models';

const rootReducers = combineReducers({
  authentication: reducerAuthentication,
  misc: reducerMisc,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
