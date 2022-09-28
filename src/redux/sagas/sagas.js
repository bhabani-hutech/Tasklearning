import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
//takeLatest is just used as like switch case in the reducer,it just listening an action, switch == takeLatest or takeEvery
//to process the latest request action we prefer takeLatest

const fetchUsingAxios = (url, payload = null) => {
  return axios.get(url);
};
const addBlogAxios = (url, payload = null) => {
  return axios.post(url, payload);
};
const fetchBlogAxios = (url, payload = null) => {
  return axios.get(url, payload);
};
//worker section//
function* fetchMovies(action) {
  try {
    const movies = yield call(
      fetchUsingAxios,
      "https://jsonplaceholder.typicode.com/photos"
    );
    yield put({ type: "FETCH_MOVIES_SUCCESS", result: movies });
  } catch (e) {
    yield put({ type: "FETCH_MOVIES_FAILED", error: e.message });
  }
}
function* addBlog(action) {
  try {
    const blogs = yield call(
      addBlogAxios,
      "https://jsonplaceholder.typicode.com/posts",
      action.payload
    );
    console.log(blogs)
    yield put({ type: "ADD_BLOG_SUCCESS", result: blogs });
  } catch (e) {
    yield put({ type: "ADD_BLOG_FAILED", error: e.message });
  }
}
function* fetchBlogs(action) {
  try {
    const blogData = yield call(
      fetchBlogAxios,
      "https://jsonplaceholder.typicode.com/posts",
      action.payload
    );
    yield put({ type: "FETCH_BLOG_SUCCESS", result: blogData });
  } catch (e) {
    yield put({ type: "FETCH_BLOG_FAILED", error: e.message });
  }
}
//watcher section //
// function* movieSaga() {
//   yield takeLatest("FETCH_MOVIES", fetchMovie);
// }
function* movieSaga() {
  yield all([
    takeLatest("FETCH_MOVIES", fetchMovies),
    takeLatest("ADD_BLOG", addBlog),
    takeLatest("FETCH_BLOG", fetchBlogs),
  ]);
}
export default movieSaga;
//this one line our watcher , movieSaga is our function which we are importing and exporting in the index file
//here fetchMovies is a worker
