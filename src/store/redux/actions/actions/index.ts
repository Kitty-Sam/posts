import { FetchFilteredPostsPayload, FetchPostsPayload } from '@store/redux/types';
import { PostActions, UserActions } from '@store/redux/actions/type';

export const fetchPosts = (payload: FetchPostsPayload) => ({
    type: UserActions.FETCH_POSTS,
    payload,
});

export const fetchFilteredPosts = (payload: FetchFilteredPostsPayload) => ({
    type: PostActions.FETCH_FILTERED_BY_USER_POSTS,
    payload,
});
