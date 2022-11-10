import { createStore } from "redux";
import persistStore from "redux-persist/es/persistStore";
import { reduxPersits } from "./redux/reducer";

export const store = createStore(reduxPersits) 
export const persistor = persistStore(store)