import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import auctionReducer from './slices/auction';
import bidReducer from './slices/bid'
// import rootReducer, { rootPersistConfig } from './rootReducer';

// ----------------------------------------------------------------------

export const auctionPersistConfig = {
  key: 'auction',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['auction', 'auctions', 'createAuction'],
};

const rootPersistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'redux-',
    whitelist: [],
};

const rootReducer = combineReducers({
  auction: persistReducer(auctionPersistConfig, auctionReducer),
  bid: bidReducer
});

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

const persistor = persistStore(store);

const { dispatch } = store;

const useSelector = useAppSelector;

const useDispatch = () => useAppDispatch();

export { store, persistor, dispatch, useSelector, useDispatch };
