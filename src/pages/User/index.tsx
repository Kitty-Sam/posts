import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredPosts } from '@store/selectors';
import { fetchFilteredPostsAction } from '@store/sagas/actions/actions';
import { Post } from '@components/Post';
import { Paginate } from '@components/Paginate';
import { usePaginate } from '@/hooks/usePaginate';

export const User = () => {
    const filteredPosts = useSelector(getFilteredPosts);

    const { currentPosts, paginate, previousPage, nextPage, currentPage, postsPerPage } = usePaginate(
        filteredPosts,
        1,
        10,
    );

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilteredPostsAction({ userId: id! }));
    }, []);

    const onUserPagePress = () => () => {};

    return (
        <>
            <Link to="/posts">Posts</Link>
            <div>user with id `${id}`</div>
            <div>
                {currentPosts.map((post) => (
                    <Post post={post} onUserPagePress={onUserPagePress} key={post.id} />
                ))}
            </div>
            <Paginate
                postsPerPage={postsPerPage}
                totalPosts={filteredPosts.length}
                paginate={paginate}
                previousPage={previousPage}
                nextPage={nextPage}
                currentPage={currentPage}
            />
        </>
    );
};
