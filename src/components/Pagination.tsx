import { FC } from 'react';
import { Pagination } from 'react-bootstrap';

export interface IPagination {
    currentPage: number;
    totalPages: number;
    handlePageChange: (value: number) => void;
}

export const PaginationUI: FC<IPagination> = ({ currentPage, totalPages, handlePageChange }) => {
    const onFirstPageClick = () => handlePageChange(1);
    const onLastPageClick = () => () => handlePageChange(totalPages);
    const onPrevPageClick = () => handlePageChange(currentPage - 1);
    const onNextPageClick = () => () => handlePageChange(currentPage + 1);

    const onPaginate = (page: number) => () => handlePageChange(page);

    return (
        <Pagination>
            <Pagination.First onClick={onFirstPageClick} />
            <Pagination.Prev onClick={onPrevPageClick} disabled={currentPage === 1} />

            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <Pagination.Item key={page} active={page === currentPage} onClick={onPaginate(page)}>
                    {page}
                </Pagination.Item>
            ))}

            <Pagination.Next onClick={onNextPageClick} disabled={currentPage === totalPages} />
            <Pagination.Last onClick={onLastPageClick} />
        </Pagination>
    );
};
