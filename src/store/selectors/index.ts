import { AppStoreType } from '@store/redux/reducers/rootReducer';

export const getAllPosts = (state: AppStoreType) => state.user.posts;
export const getFilteredPosts = (state: AppStoreType) => state.post.filteredPosts;
export const getComments = (state: AppStoreType) => state.post.comments;
export const getLoadingCommentsStatus = (state: AppStoreType) => state.post.isLoading;
export const getOpenedUser = (state: AppStoreType) => state.user.openedUser;
