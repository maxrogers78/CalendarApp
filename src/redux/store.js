// Redux
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// Ducks
import { uiReducer } from "./calendarDuck";
import { calendarReducer } from "./calendarDuck";

const rootReducer = combineReducers({
  ui: uiReducer,
  calendar: calendarReducer,
  // TODO: AuthReducer
});

// redux-devtools
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
