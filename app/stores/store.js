'use client';

import {persistStore, persistReducer} from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducer";
import {configureStore} from "@reduxjs/toolkit";

const persistConfig = {
    key: "root", storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})
const persistor = persistStore(store);

export {store, persistor};

