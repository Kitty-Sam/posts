import { takeLatest } from '@redux-saga/core/effects';
import { FETCH_ALL_POSTS, FETCH_COMMENTS, FETCH_FILTERED_POSTS, FETCH_OPENED_USER } from '@store/sagas/actions/type';
import { fetchAllPostsWorker } from '@store/sagas/sagas/post/fetchAllPosts';
import { fetchFilteredPostsWorker } from '@store/sagas/sagas/post/fetchFilteredPosts';
import { fetchCommentsByIdWorker } from '@store/sagas/sagas/post/fetchCommentsByPostId';
import { fetchOpenedUserWorker } from '@store/sagas/sagas/post/fetchOpenedUser';
export function* watchClickSaga() {
    yield takeLatest(FETCH_ALL_POSTS, fetchAllPostsWorker);
    yield takeLatest(FETCH_FILTERED_POSTS, fetchFilteredPostsWorker);
    yield takeLatest(FETCH_COMMENTS, fetchCommentsByIdWorker);
    yield takeLatest(FETCH_OPENED_USER, fetchOpenedUserWorker);
}

export default function* rootSaga() {
    yield watchClickSaga();
}
