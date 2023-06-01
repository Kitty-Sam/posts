import styles from '@styles/Post.module.css';
import { IPost } from '@store/redux/reducers/postReducer';
import { FC, useState } from 'react';
import { fetchCommentsAction } from '@store/sagas/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '@store/selectors';

export interface IPostProps {
    post: IPost;
    onUserPagePress: (userId: string) => () => void;
}
export const Post: FC<IPostProps> = ({ post, onUserPagePress }) => {
    const { id, body, title, userId } = post;

    const [isOpenComments, setIsComments] = useState(false);

    const dispatch = useDispatch();

    const comments = useSelector(getComments);

    const onCommentPress = (id: string) => () => {
        dispatch(fetchCommentsAction({ postId: id }));
        setIsComments(!isOpenComments);
    };

    return (
        <div key={id} className={styles.wrapper}>
            <div className={styles.avatar} onClick={onUserPagePress(userId)} />
            <div className={styles.title}>{title}</div>
            <div>{body}</div>
            <button onClick={onCommentPress(id)}>Comment</button>
            {isOpenComments ? (
                comments.map((comment, index) => (
                    <div key={comment.id}>
                        <div>{index + 1}</div>
                        <div>{comment.email}</div>
                        <div>{comment.body}</div>
                    </div>
                ))
            ) : (
                <></>
            )}
        </div>
    );
};
