import { fetchDataError, fetchDataSuccess, FETCH_DATA } from "../actions";
import { call, put, takeLatest } from "redux-saga/effects"
const ROOT_URL = "https://api.netbet.com/development/";

export function* fetchDataSource1() {
    const urlApi = `${ROOT_URL}randomFeed?website=casino&lang=eu&device=desktop&source=list1`;

    try {
        const response = yield fetch(urlApi);
        const res = yield response.json();
        console.log(res)
        yield put(fetchDataSuccess(res?.data))
    } catch (err) {
        console.log(err)
        yield put(fetchDataError(err))
    }
}

export function* fetchDataSource2() {
    const urlApi = `${ROOT_URL}randomFeed?website=casino&lang=eu&device=desktop&source=list2`;

    try {
        const response = yield fetch(urlApi);
        const res = yield response.json();
        console.log(res)
        yield put(fetchDataSuccess(res?.data))
    } catch (err) {
        console.log(err)
        yield put(fetchDataError(err))
    }
}

export function* fetchDataSource3() {
    const urlApi = `${ROOT_URL}randomFeed?website=casino&lang=eu&device=desktop&source=list3`;

    try {
        const response = yield fetch(urlApi);
        const res = yield response.json();
        console.log(res)
        yield put(fetchDataSuccess(res?.data))
    } catch (err) {
        console.log(err)
        yield put(fetchDataError(err))
    }
}

export default function* fetchTitles() {
    yield takeLatest(FETCH_DATA, fetchDataSource2);
}