export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

export const fetchDatas = () => ({ type: FETCH_DATA })
export const fetchDataSuccess = (payload) => ({ type: FETCH_DATA_SUCCESS, payload })
export const fetchDataError = (payload) => ({ type: FETCH_DATA_ERROR, payload })