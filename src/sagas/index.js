import { fork } from "redux-saga/effects";

import tempSaga from "./tempSaga";

export default function* rootSaga() {
  yield [fork(tempSaga)];
}
