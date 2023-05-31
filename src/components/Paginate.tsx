import { FC } from 'react';
import styles from '@styles/Pagination.module.css';
export interface IPaginate {
    postsPerPage: number;
    totalPosts: number;
    paginate: (value: number) => void;
    previousPage: () => void;
    nextPage: () => void;
    currentPage: number;
}

export const Paginate: FC<IPaginate> = ({
    paginate,
    previousPage,
    nextPage,
    currentPage,
    totalPosts,
    postsPerPage,
}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={styles.wrapper}>
            <ul className={styles.pagination}>
                <li onClick={previousPage} className={styles.pageNumber}>
                    &lt;
                </li>
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        onClick={() => paginate(number)}
                        className={styles.pageNumber}
                        style={{ backgroundColor: number === currentPage ? '#646cff' : 'inherit' }}
                    >
                        {number}
                    </li>
                ))}
                <li onClick={nextPage} className={styles.pageNumber}>
                    &gt;
                </li>
            </ul>
        </div>
    );
};
