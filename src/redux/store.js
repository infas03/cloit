import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";
import { version } from "react";

const persistConfig = {
  key: "root_cloit",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = 
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    : compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware())
);
export const persistor = persistStore(store);
