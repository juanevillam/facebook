import thunk from "redux-thunk";
import { UiReducer } from "../Reducers/Ui";
import { AuthReducer } from "../Reducers/Auth";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const reducers = combineReducers({
  UiReducer,
  AuthReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
