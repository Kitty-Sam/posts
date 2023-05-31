import { AppStoreType } from '@store/redux/reducers/rootReducer';

export const getAllPosts = (state: AppStoreType) => state.user.posts;
export const getFilteredPosts = (state: AppStoreType) => state.post.filteredPosts;
