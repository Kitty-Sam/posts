import axios from 'axios';
import { toast } from 'react-toastify';
import { FetchOpenedUser } from '@store/sagas/actions/actions';
import { openUser } from '@store/redux/actions/actions';
import { put } from '@redux-saga/core/effects';
import { IUser } from '@store/redux/reducers/userReducer';

export function* fetchOpenedUserWorker({ payload }: FetchOpenedUser) {
    const { userId } = payload;
    try {
        const { data } = yield axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);

        const { id, email, name, phone } = data;

        const openedUser: IUser = {
            id,
            email,
            name,
            phone,
        };

        console.log('openedUser', openedUser);

        yield put(openUser({ openedUser }));
    } catch (error: any) {
        console.warn(error);
        yield toast.error('Something went wrong!');
    }
}
