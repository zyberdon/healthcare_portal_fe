// Action Types
export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const FETCH_HOMEPAGE = "FETCH_HOMEPAGE";
export const STORE_HOMEPAGE = "STORE_HOMEPAGE";

// Action Creators
export const fetchRequest = (data) => ({ type: FETCH_REQUEST, payload: data }); //data obj should contain url and reqbody which inturn has body and req type
export const fetchSuccess = (data) => ({ type: FETCH_SUCCESS, payload: data });
export const fetchFailure = (error) => ({ type: FETCH_FAILURE, payload: error });
export const fetchHomepage = (data) => ({ type: FETCH_HOMEPAGE, payload: data }); //data obj should contain url and reqbody which inturn has body and req type
export const storeHomepage = (data) => ({ type: STORE_HOMEPAGE, payload: data }); //data obj should contain url and reqbody which inturn has body and req type
