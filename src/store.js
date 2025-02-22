import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import dataReducer from "./reducers";
import dataSaga from "./sagas";

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Combine reducers
const rootReducer = combineReducers({
    data: dataReducer,
});

// Create store with middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Root saga (combining all sagas)
function* rootSaga() {
    yield all([dataSaga()]);
}

// Run saga middleware
sagaMiddleware.run(rootSaga);

export default store;
