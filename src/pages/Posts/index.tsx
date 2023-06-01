import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPostsAction } from '@store/sagas/actions/actions';
import { getAllPosts } from '@store/selectors';

import { Post } from '@components/Post';
import { usePaginate } from '@/hooks/usePaginate';
import { useSearch } from '@/hooks/useSearch';
import { PaginationUI } from '@components/Pagination';
import { Container, Stack } from 'react-bootstrap';

export const Posts = () => {
    const posts = useSelector(getAllPosts);

    const { search, onChangeSearch } = useSearch();

    const searchedPosts = posts.filter((post) => post.title.includes(search));

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllPostsAction());
    }, []);

    const onUserPagePress = (id: string) => () => {
        navigate(`/user/${id}`);
    };

    const { visiblePosts, handlePageChange, currentPage, totalPages } = usePaginate(searchedPosts, posts);

    return (
        <Stack gap={3}>
            <Link to={'/about'}>About</Link>
            <p className="lead">All posts</p>
            <Container>
                <input value={search} onChange={onChangeSearch} placeholder={'Type to search...'} />
            </Container>

            <Container>
                {visiblePosts.map((post) => (
                    <Post post={post} onUserPagePress={onUserPagePress} key={post.id} />
                ))}
            </Container>
            <PaginationUI currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
        </Stack>
    );
};
