import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE, FETCH_HOMEPAGE } from "../actions";

const initialState = {
    data: null,
    loading: false,
    error: null,
    homepage: {}
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case FETCH_HOMEPAGE:
            return { ...state, homepage: action.payload };
        default:
            return state;
    }
};

export default dataReducer;
