import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPostsAction } from '@store/sagas/actions/actions';
import { getAllPosts } from '@store/selectors';

import styles from '@styles/Posts.module.css';
import { Paginate } from '@components/Paginate';
import { Post } from '@components/Post';
import { usePaginate } from '@/hooks/usePaginate';

export const Posts = () => {
    const posts = useSelector(getAllPosts);

    const { currentPosts, paginate, previousPage, nextPage, postsPerPage } = usePaginate(posts, 1, 10);

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
            <Link to={'/'}>About</Link>
            <div className={styles.header}>All posts</div>

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
            />
        </>
    );
};
