import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPostsAction } from '@store/sagas/actions/actions';
import { getAllPosts } from '@store/selectors';

import styles from '@styles/Posts.module.css';

export const Posts = () => {
    const posts = useSelector(getAllPosts);
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
                {posts.map((post) => (
                    <div key={post.id} className={styles.wrapper}>
                        <div
                            style={{
                                width: 50,
                                height: 50,
                                borderStyle: 'solid',
                                borderColor: 'black',
                                borderWidth: 1,
                                borderRadius: 25,
                                cursor: 'pointer',
                            }}
                            onClick={onUserPagePress(post.userId)}
                        />
                        <div className={styles.title}>{post.title}</div>
                        <div>{post.body}</div>
                    </div>
                ))}
            </div>
        </>
    );
};
