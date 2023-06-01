import { PostActions, UserActions } from '@store/redux/actions/type';
import { IPost } from '@store/redux/reducers/postReducer';

export interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
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

export interface FetchCommentsPayload {
    comments: IComment[];
}

export type FetchComments = {
    type: typeof PostActions.FETCH_COMMENTS_BY_ID;
    payload: FetchCommentsPayload;
};

export interface FetchPostsByTitlePayload {
    sortedPosts: IPost[];
}

export type ActionsType = FetchFilteredPosts | FetchPosts | FetchComments;
