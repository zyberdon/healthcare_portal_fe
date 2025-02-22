// Action Types
export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

// Action Creators
export const fetchRequest = (data) => ({ type: FETCH_REQUEST, payload: data }); //data obj should contain url and reqbody which inturn has body and req type
export const fetchSuccess = (data) => ({ type: FETCH_SUCCESS, payload: data });
export const fetchFailure = (error) => ({ type: FETCH_FAILURE, payload: error });
