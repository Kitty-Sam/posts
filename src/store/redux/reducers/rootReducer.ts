import { combineReducers } from 'redux';
import { postReducer } from '@store/redux/reducers/postReducer';
import { userReducer } from '@store/redux/reducers/userReducer';

export const rootReducer = combineReducers({
    post: postReducer,
    user: userReducer,
});

export type AppStoreType = ReturnType<typeof rootReducer>;
