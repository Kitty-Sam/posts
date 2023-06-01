import { useState } from 'react';
import { IPost } from '@store/redux/reducers/postReducer';

export const usePaginate = (searchedPosts: IPost[] | [], posts: IPost[]) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const postsPerPage = 10;

    const totalPages = Math.ceil(
        searchedPosts.length ? searchedPosts.length / postsPerPage : posts.length / postsPerPage,
    );
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const visiblePosts = searchedPosts.length
        ? searchedPosts.slice(startIndex, endIndex)
        : posts.slice(startIndex, endIndex);

    return {
        handlePageChange,
        totalPages,
        visiblePosts,
        currentPage,
    };
};
