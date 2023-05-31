import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredPosts } from '@store/selectors';
import { fetchFilteredPostsAction } from '@store/sagas/actions/actions';

export const User = () => {
    const filteredPosts = useSelector(getFilteredPosts);

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilteredPostsAction({ userId: id! }));
    }, []);

    return (
        <>
            <Link to="/posts">Posts</Link>
            <div>user with id `${id}`</div>
            <div>
                {filteredPosts.map((post) => (
                    <>
                        <div>{post.title}</div>
                        <div>{post.body}</div>
                    </>
                ))}
            </div>
        </>
    );
};
