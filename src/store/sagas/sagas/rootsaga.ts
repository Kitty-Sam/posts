import { takeLatest } from '@redux-saga/core/effects';
import { FETCH_ALL_POSTS, FETCH_FILTERED_POSTS } from '@store/sagas/actions/type';
import { fetchAllPostsWorker } from '@store/sagas/sagas/post/fetchAllPosts';
import { fetchFilteredPostsWorker } from '@store/sagas/sagas/post/fetchFilteredPosts';
export function* watchClickSaga() {
    yield takeLatest(FETCH_ALL_POSTS, fetchAllPostsWorker);
    yield takeLatest(FETCH_FILTERED_POSTS, fetchFilteredPostsWorker);
}

export default function* rootSaga() {
    yield watchClickSaga();
}
