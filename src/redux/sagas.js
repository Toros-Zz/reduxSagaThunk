import { call, takeEvery, put } from 'redux-saga/effects';
import { REQUEST_POSTS, FETCH_POST } from './types';
import { showLoader, hideLoader } from './actions';

export function * sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker);
};

function * sagaWorker() {
    yield put(showLoader());
    const payload = yield call(fetchPosts);
    yield put({ type: FETCH_POST, payload });
    yield put(hideLoader());
};

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}