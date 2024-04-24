import { call, put, takeEvery } from "redux-saga/effects";
import { ADD_SONG, DELETE_SONG, GET_SONG, UPDATE_SONG } from "./ActionTypes";
import {
  deleteSongAPI,
  getSongAPI,
  postSongAPI,
  updateSongAPI,
} from "./SongAPI";
import {
  addError,
  addSong,
  deleteSong,
  getSongs,
  playCurrent,
} from "../../ReduxToolkit/Features/SongSlice";

import { toast } from "react-toastify";
export function* getSongSaga() {
  const { data } = yield getSongAPI();
  yield put(getSongs(data));
}
export function* addSongSaga(action) {
  try {
    const { data } = yield call(postSongAPI, action.formData);
    yield put(addSong(data));
    toast.success('Song is added successfully!')
  } catch (error) {
    console.log(error);
    yield put(addError(error.response.data.error));
  }
}
export function* updateSongSaga(action) {
  const { data } = yield call(updateSongAPI, action.id, action.artist);
  console.log("----------------", data);
  yield put(playCurrent(data.updatedSong));
  yield put(getSongs(data.songsList));
  toast.info('Song is updated successfully!')
}
export function* deleteSongSaga(action) {
  const { data } = yield call(deleteSongAPI, action.id);
  yield put(deleteSong(data));
  toast.error('Song is deleted successfully!')
}

export function* wactchSongAsync() {
  yield takeEvery(ADD_SONG, addSongSaga);
  yield takeEvery(GET_SONG, getSongSaga);
  yield takeEvery(UPDATE_SONG, updateSongSaga);
  yield takeEvery(DELETE_SONG, deleteSongSaga);
}
