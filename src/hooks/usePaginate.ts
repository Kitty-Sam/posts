import { IPost } from '@store/redux/reducers/postReducer';

export const usePaginate = (searchedPosts: IPost[] | [], posts: IPost[], currentPage: number) => {
    const postsPerPage = 10;

    const totalPages = Math.ceil(
        searchedPosts.length ? searchedPosts.length / postsPerPage : posts.length / postsPerPage,
    );
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const visiblePosts = searchedPosts.length ? searchedPosts : posts.slice(startIndex, endIndex);

    return {
        totalPages,
        visiblePosts,
    };
};
