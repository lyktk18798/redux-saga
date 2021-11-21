import { all } from "redux-saga/effects";
import fetchTitles from "./TitleSaga";

export default function* rootSaga() {
    yield all([
        fetchTitles(),
    ])
}