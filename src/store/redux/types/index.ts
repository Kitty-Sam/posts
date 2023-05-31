import { PostActions, UserActions } from '@store/redux/actions/type';
import { IPost } from '@store/redux/reducers/postReducer';

export interface FetchPostsPayload {
    posts: IPost[];
}

export type FetchPosts = {
    type: typeof UserActions.FETCH_POSTS;
    payload: FetchPostsPayload;
};

export interface FetchFilteredPostsPayload {
    filteredPosts: IPost[];
}

export type FetchFilteredPosts = {
    type: typeof PostActions.FETCH_FILTERED_BY_USER_POSTS;
    payload: FetchFilteredPostsPayload;
};

export type ActionsType = FetchFilteredPosts | FetchPosts;
