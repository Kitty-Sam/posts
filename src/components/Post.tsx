import styles from '@styles/Post.module.css';
import { IPost } from '@store/redux/reducers/postReducer';
import { FC } from 'react';

export interface IPostProps {
    post: IPost;
    onUserPagePress: (userId: string) => () => void;
}
export const Post: FC<IPostProps> = ({ post, onUserPagePress }) => {
    const { id, body, title, userId } = post;
    return (
        <div key={id} className={styles.wrapper}>
            <div className={styles.avatar} onClick={onUserPagePress(userId)} />
            <div className={styles.title}>{title}</div>
            <div>{body}</div>
        </div>
    );
};
