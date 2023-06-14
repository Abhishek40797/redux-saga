import { createStore } from "redux";
import { userReducer } from "./userReducers";
import { combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { fetchUsersSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    userReducer
})

export const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(fetchUsersSaga)

export type Istate = ReturnType<typeof rootReducer >