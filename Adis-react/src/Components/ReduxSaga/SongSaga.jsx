import { all } from "redux-saga/effects";
import axios from "axios";
import { wactchSongAsync } from "./Types/Saga";

export function* rootSaga() {
  yield all([wactchSongAsync()]);
}