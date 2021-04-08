import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import rootReducer from "./states";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'lists'
    ],
    blacklist: [
    ],
}

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer,
)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => [...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }), logger]
});

const persistor = persistStore(store);

export {
    store,
    persistor
}