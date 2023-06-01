import { PostActions } from '@store/redux/actions/type';
import { ActionsType, IComment } from '@store/redux/types';

export interface IPost {
    userId: string;
    id: string;
    title: string;
    body: string;
}

export interface IInitialState {
    filteredPosts: IPost[];
    comments: IComment[];
}

const initialState: IInitialState = {
    filteredPosts: [],
    comments: [],
};

export const postReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case PostActions.FETCH_FILTERED_BY_USER_POSTS: {
            return { ...state, filteredPosts: action.payload.filteredPosts };
        }
        case PostActions.FETCH_COMMENTS_BY_ID: {
            return { ...state, comments: action.payload.comments };
        }

        default:
            return state;
    }
};
