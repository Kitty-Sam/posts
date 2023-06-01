import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPostsAction } from '@store/sagas/actions/actions';
import { getAllPosts } from '@store/selectors';

import styles from '@styles/Posts.module.css';
import { Paginate } from '@components/Paginate';
import { Post } from '@components/Post';
import { usePaginate } from '@/hooks/usePaginate';
import { useSearch } from '@/hooks/useSearch';

export const Posts = () => {
    const posts = useSelector(getAllPosts);

    const { search, onChangeSearch } = useSearch();

    const searchedPosts = posts.filter((post) => post.title.includes(search));

    const { currentPosts, paginate, previousPage, nextPage, currentPage, postsPerPage } = usePaginate(
        searchedPosts.length ? searchedPosts : posts,
        1,
        10,
    );

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllPostsAction());
    }, []);

    const onUserPagePress = (id: string) => () => {
        navigate(`/user/${id}`);
    };

    return (
        <>
            <Link to={'/about'}>About</Link>
            <div className={styles.header}>All posts</div>
            <input value={search} onChange={onChangeSearch} placeholder={'Type to search...'} />

            <div>
                {currentPosts.map((post) => (
                    <Post post={post} onUserPagePress={onUserPagePress} key={post.id} />
                ))}
            </div>

            <Paginate
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                previousPage={previousPage}
                nextPage={nextPage}
                currentPage={currentPage}
            />
        </>
    );
};
