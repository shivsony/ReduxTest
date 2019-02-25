import { call, put, fork, takeLatest } from "redux-saga/effects";

import * as actions from "../ducks/temp";

import axios from "axios";

function* tempSaga(action) {
    try {
      yield call(axios.get("/taskinetics"));
      yield put(actions.successAction("success"));
    } catch (error) {
      yield console.log(error);
    }
}

export function* watchTempSaga() {
    yield takeLatest(actions.FIRST_API_REQUEST, tempSaga);
}

export default function* rootSaga() {
    yield [
      fork(watchTempSaga)
    ]
}