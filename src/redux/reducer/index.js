import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import { countProductReducer } from "./countProduct";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const rootReducer = combineReducers({
  count: countProductReducer,
});

export const reduxPersits = persistReducer(persistConfig, rootReducer);
