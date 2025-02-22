import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE, FETCH_HOMEPAGE, GET_LOGIN } from "../actions";

const initialState = {
    data: null,
    loading: false,
    error: null,
    homepage: {},
    loginStats: {}
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
        case FETCH_HOMEPAGE:
            return { ...state, homepage: action.payload };
        case GET_LOGIN:
            return { ...state, loginStats: action.payload };
        default:
            return state;
    }
};

export default dataReducer;
