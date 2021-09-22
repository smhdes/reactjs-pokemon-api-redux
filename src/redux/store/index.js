import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import pokemonsReducer from "../reducers/pokemonsReducer";

export const rootReducer = combineReducers({
  pokemonsReducer: pokemonsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
