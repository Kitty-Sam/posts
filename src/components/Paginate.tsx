import { FC } from 'react';

export interface IPaginate {
    postsPerPage: number;
    totalPosts: number;
    paginate: (value: number) => void;
    previousPage: any;
    nextPage: any;
}

export const Paginate: FC<IPaginate> = ({ postsPerPage, totalPosts, paginate, previousPage, nextPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination-container">
            <ul className="pagination">
                <li onClick={previousPage} className="page-number">
                    Prev
                </li>
                {pageNumbers.map((number) => (
                    <li key={number} onClick={() => paginate(number)} className="page-number">
                        {number}
                    </li>
                ))}
                <li onClick={nextPage} className="page-number">
                    Next
                </li>
            </ul>
        </div>
    );
};
