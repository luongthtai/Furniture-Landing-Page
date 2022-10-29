import { applyMiddleware, createStore } from "redux";
import { myMiddleware } from "./middleware/Middleware";
import rootReducer from "./redux/reducer";

export const store = createStore(rootReducer, applyMiddleware(myMiddleware)) 