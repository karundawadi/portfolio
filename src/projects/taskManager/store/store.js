import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/reducers/taskReducer";
import errorReducer from "../features/reducers/errorReducer";
import stateReducer from "../features/reducers/stateReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedTaskReducer = persistReducer(persistConfig, taskReducer);
const persistedErrorReducer = persistReducer(persistConfig, errorReducer);
const persistedStateReducer = persistReducer(persistConfig, stateReducer);

export const store = configureStore({
  reducer: {
    taskReducer: persistedTaskReducer,
    errorReducer: persistedErrorReducer,
    stateReducer: persistedStateReducer,
  },
});

export const persistor = persistStore(store);
