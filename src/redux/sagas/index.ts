import { takeEvery, put, call, fork, all } from "redux-saga/effects";
import {
  getLatestNews,
  getPopularNews,
  setlatestNews,
  setPopularNews,
} from "../reducers/setNewsSlice";
import {
  setPopularNewsError,
  setlatestNewsError,
} from "../reducers/ErrorsSlice";
import { fetchLatestNews, fetchPopularNews } from "../../api";
import {} from "../reducers/setNewsSlice";

// worker

export function* handleLatestNews() {
  console.log("worker latrest");
  try {
    const { hits } = yield call(fetchLatestNews);
    yield put(setlatestNews(hits));
  } catch {
    yield put({
      type: setlatestNewsError.type,
      payload: "failed to fetch latest news",
    });
  }
}
export function* handlePopularNews() {
  console.log("worker popular");

  try {
    const { hits } = yield call(fetchPopularNews);
    yield put(setPopularNews(hits));
  } catch {
    yield put({
      type: setPopularNewsError.type,
      payload: "failed to fetch popular news",
    });
  }
}

// watcher
export function* watchLatestSaga() {
  yield takeEvery(getLatestNews.type, handleLatestNews);
}
export function* watchPopularSaga() {
  yield takeEvery(getPopularNews.type, handlePopularNews);
}

export default function* rootSaga() {
  yield all([fork(watchLatestSaga), fork(watchPopularSaga)]);
}
