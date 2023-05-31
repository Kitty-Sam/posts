import { IPost } from '@store/redux/reducers/postReducer';
import { ActionsType } from '@store/redux/types';
import { UserActions } from '@store/redux/actions/type';

export interface IUser {
    id: string;
    name: string;
    personalInfo: string;
}

export interface IInitialState {
    user: IUser;
    posts: IPost[];
}

const initialState: IInitialState = {
    user: {} as IUser,
    posts: [],
};

export const userReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case UserActions.FETCH_POSTS: {
            return { ...state, posts: action.payload.posts };
        }
        default:
            return state;
    }
};
