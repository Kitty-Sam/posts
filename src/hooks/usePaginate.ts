import { useState } from 'react';
import { IPost } from '@store/redux/reducers/postReducer';

export const usePaginate = (posts: IPost[], initCurrentPage: number, initPostPerPage: number) => {
    const [currentPage, setCurrentPage] = useState(initCurrentPage);
    const [postsPerPage] = useState(initPostPerPage);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const pageNumbers = [currentPage - 1, currentPage, currentPage + 1];

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        // if (currentPage >= 2 && currentPage < Math.ceil(posts.length / postsPerPage)) {
        //     setCurrentPage(pageNumber);
        // }
    };

    const previousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage !== Math.ceil(posts.length / postsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    return {
        currentPosts,
        paginate,
        previousPage,
        nextPage,
        postsPerPage,
        currentPage,
        pageNumbers,
    };
};
