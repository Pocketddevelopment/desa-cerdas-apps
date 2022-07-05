import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { PersistConfig, persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import rootReducers from './rootReducers';

const persistConfig: PersistConfig<any> = {
  key: 'dc-app',
  storage: AsyncStorage,
  whitelist: ['authentication'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
const persistor = persistStore(store);
export { store, persistor };

export type RootState = ReturnType<typeof rootReducers>;
export type AppDispatch = typeof store.dispatch;
