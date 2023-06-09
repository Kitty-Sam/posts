import {
    FetchCommentsPayload,
    FetchFilteredPostsPayload,
    FetchPostsPayload,
    IsLoadingCommentsPayload,
    OpenedUserPayload,
} from '@store/redux/types';
import { PostActions, UserActions } from '@store/redux/actions/type';

export const fetchPosts = (payload: FetchPostsPayload) => ({
    type: UserActions.FETCH_POSTS,
    payload,
});

export const fetchFilteredPosts = (payload: FetchFilteredPostsPayload) => ({
    type: PostActions.FETCH_FILTERED_BY_USER_POSTS,
    payload,
});

export const fetchComments = (payload: FetchCommentsPayload) => ({
    type: PostActions.FETCH_COMMENTS_BY_ID,
    payload,
});

export const isLoadingComments = (payload: IsLoadingCommentsPayload) => ({
    type: PostActions.IS_LOADING_COMMENTS,
    payload,
});

export const openUser = (payload: OpenedUserPayload) => ({
    type: UserActions.SET_OPENED_USER,
    payload,
});
