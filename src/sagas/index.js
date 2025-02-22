import { takeLatest, call, put } from "redux-saga/effects";
import { FETCH_REQUEST, fetchSuccess, fetchFailure } from "../actions";
import { fetchApi } from '../constants/endpoints'
// API Call Function
// const fetchDataApi = async () => {
//     const response = await fetch.get("https://jsonplaceholder.typicode.com/posts/1");
//     return response.data;
// };

// Saga Worker Function
function* fetchDataSaga(payload) {
    try {
        const data = yield call(fetchApi(payload));
        yield put(fetchSuccess(data)); // Dispatch success action
    } catch (error) {
        yield put(fetchFailure(error.message)); // Dispatch failure action
    }
}

// Saga Watcher Function
export default function* dataSaga() {
    yield takeLatest(FETCH_REQUEST, fetchDataSaga);
}
