import {
  AnyAction,
  combineReducers,
  configureStore,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  attributeReducer,
  authReducer,
  cartReducer,
  categoryReducer,
  modalReducer,
} from '../slices';

const middleware = [] as any[];

const allReducer = combineReducers({
  modal: modalReducer,
  auth: authReducer,
  category: categoryReducer,
  attribute: attributeReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'],
  blacklist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, allReducer);

export const store = configureStore({
  // reducer,
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).prepend([...middleware]),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type RootState = ReturnType<typeof store.getState>;
