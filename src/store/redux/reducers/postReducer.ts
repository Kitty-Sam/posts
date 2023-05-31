import { PostActions } from '@store/redux/actions/type';
import { ActionsType } from '@store/redux/types';

export interface IPost {
    userId: string;
    id: string;
    title: string;
    body: string;
}

export interface IInitialState {
    filteredPosts: IPost[];
}

const initialState: IInitialState = {
    filteredPosts: [],
};

export const postReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case PostActions.FETCH_FILTERED_BY_USER_POSTS: {
            return { ...state, filteredPosts: action.payload.filteredPosts };
        }
        default:
            return state;
    }
};
