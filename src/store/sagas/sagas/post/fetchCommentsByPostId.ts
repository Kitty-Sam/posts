import { put } from '@redux-saga/core/effects';
import axios from 'axios';
import { toast } from 'react-toastify';
import { fetchComments, isLoadingComments } from '@store/redux/actions/actions';
import { FetchComments } from '@store/sagas/actions/actions';

export function* fetchCommentsByIdWorker({ payload }: FetchComments) {
    const { postId } = payload;
    yield put(fetchComments({ comments: [] }));
    yield put(isLoadingComments({ isLoading: true }));
    try {
        const { data } = yield axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        yield put(fetchComments({ comments: data }));
        yield put(isLoadingComments({ isLoading: false }));
    } catch (error: any) {
        console.warn(error);
        yield toast.error('Something went wrong!');
        yield put(isLoadingComments({ isLoading: false }));
    }
}
