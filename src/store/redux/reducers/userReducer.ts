import { IPost } from '@store/redux/reducers/postReducer';
import { ActionsType } from '@store/redux/types';
import { UserActions } from '@store/redux/actions/type';

export interface IUser {
    id: string;
    name: string;
    email: string;
    phone: string;
}

export interface IInitialState {
    openedUser: IUser;
    posts: IPost[];
}

const initialState: IInitialState = {
    openedUser: {} as IUser,
    posts: [],
};

export const userReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case UserActions.FETCH_POSTS: {
            return { ...state, posts: action.payload.posts };
        }

        case UserActions.SET_OPENED_USER: {
            return { ...state, openedUser: action.payload.openedUser };
        }
        default:
            return state;
    }
};
