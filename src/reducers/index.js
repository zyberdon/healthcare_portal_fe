import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE, FETCH_HOMEPAGE, GET_LOGIN, STORE_HOMEPAGE, GET_CONTACT } from "../actions";

const initialState = {
    data: null,
    loading: false,
    error: null,
    homepage: {},
    loginStats: {},
    contactResp: {}
};

const dataReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case FETCH_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case STORE_HOMEPAGE:
            return { ...state, homepage: action.payload };
        case GET_LOGIN:
            return { ...state, loginStats: action.payload };
        case GET_CONTACT:
            return { ...state, contactResp: action.payload };
        default:
            return state;
    }
};

export default dataReducer;
