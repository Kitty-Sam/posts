import { put } from '@redux-saga/core/effects';
import axios from 'axios';
import { toast } from 'react-toastify';
import { fetchPosts } from '@store/redux/actions/actions';

export function* fetchAllPostsWorker() {
    try {
        const { data } = yield axios.get('https://jsonplaceholder.typicode.com/posts');
        yield put(fetchPosts({ posts: data }));
    } catch (error: any) {
        console.warn(error);
        yield toast.error('Something went wrong!');
    }
}
