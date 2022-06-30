import { combineReducers } from '@reduxjs/toolkit';
import reducerAuthentication from '@authentication/models';

const rootReducers = combineReducers({
  authentication: reducerAuthentication,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
