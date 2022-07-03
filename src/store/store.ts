import { configureStore } from '@reduxjs/toolkit';
import { PersistConfig, persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import rootReducers from './rootReducers';

const persistConfig: PersistConfig<any> = {
  key: 'dc-app',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);
export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
