import { FETCH_ALL_POSTS, FETCH_FILTERED_POSTS } from '@store/sagas/actions/type';

export const fetchAllPostsAction = () => ({
    type: FETCH_ALL_POSTS,
});

export type FetchAllPosts = {
    type: typeof FETCH_ALL_POSTS;
};

export interface FetchFilteredPostsPayloadType {
    userId: string;
}

export const fetchFilteredPostsAction = (payload: FetchFilteredPostsPayloadType) => ({
    type: FETCH_FILTERED_POSTS,
    payload,
});

export type FetchFilteredPosts = {
    type: typeof FETCH_FILTERED_POSTS;
    payload: FetchFilteredPostsPayloadType;
};
