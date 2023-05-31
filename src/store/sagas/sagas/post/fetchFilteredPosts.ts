import { put } from '@redux-saga/core/effects';
import axios from 'axios';
import { toast } from 'react-toastify';

import { FetchFilteredPosts } from '@store/sagas/actions/actions';
import { fetchFilteredPosts } from '@store/redux/actions/actions';

export function* fetchFilteredPostsWorker({ payload }: FetchFilteredPosts) {
    const { userId } = payload;
    try {
        const { data } = yield axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        yield put(fetchFilteredPosts({ filteredPosts: data }));
    } catch (error: any) {
        console.warn(error);
        yield toast.error('Something went wrong!');
    }
}
