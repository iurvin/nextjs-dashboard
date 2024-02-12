import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {themeReducer} from './features/themeSlice';
import { authReducer } from './features/authSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { persistStore } from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["authState"],
};

const themePersistConfig = {
  key: "theme",
  storage: storage,
  whitelist: ["themeState"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  theme: persistReducer(themePersistConfig, themeReducer)
});

export const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({ serializableCheck: false })
    }
  });

  persistStore(store);

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
