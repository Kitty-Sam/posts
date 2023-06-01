import { IPost } from '@store/redux/reducers/postReducer';
import { FC, useState } from 'react';
import { fetchCommentsAction } from '@store/sagas/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '@store/selectors';

import { initAvatar } from '@constants/initAvatar';
import { Avatar } from '@components/shared/Avatar';
import { Col, Container, Row, Stack } from 'react-bootstrap';

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
        <Stack gap={3} className="border mt-5 p-5 rounded">
            <Avatar imageUrl={initAvatar} onClick={onUserPagePress(userId)} />
            <h2 className="display-7">{title}</h2>
            <p className="lead">{body}</p>
            <Container>
                <button onClick={onCommentPress(id)}>Comment</button>
            </Container>

            {isOpenComments ? (
                comments.map((comment) => (
                    <Container key={comment.id}>
                        <Row>
                            <Col>
                                <p className="lead text-start">{comment.email}</p>
                            </Col>
                            <Col xs={6}>
                                <h6 className="display-7 text-end">{comment.body}</h6>
                            </Col>
                        </Row>
                    </Container>
                ))
            ) : (
                <></>
            )}
        </Stack>
    );
};
