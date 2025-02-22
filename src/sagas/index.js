import { takeLatest, call, put } from "redux-saga/effects";
import { FETCH_REQUEST, fetchSuccess, fetchFailure, FETCH_HOMEPAGE, storeHomepage, POST_LOGIN, getLogin } from "../actions";
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


function* fetchHomepage(payload) {
    try {
        const data = yield call(fetchApi(payload));
        yield put(storeHomepage(data)); // Dispatch success action
    } catch (error) {
        yield put(storeHomepage({ error: error.message })); // Dispatch failure action
    }
}

function* postlogin(payload) {
    try {
        const data = yield call(fetchApi, payload);
        console.log(data)
        yield put(getLogin(data)); // Dispatch success action
    } catch (error) {
        yield put(getLogin({ error: error.message })); // Dispatch failure action
    }
}


// Saga Watcher Function
export default function* dataSaga() {
    yield takeLatest(FETCH_REQUEST, fetchDataSaga);
    yield takeLatest(FETCH_HOMEPAGE, fetchHomepage);
    yield takeLatest(POST_LOGIN, postlogin);
}
