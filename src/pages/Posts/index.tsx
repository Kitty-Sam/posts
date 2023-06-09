import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchAllPostsAction, fetchOpenedUserAction } from '@store/sagas/actions/actions';
import { getAllPosts } from '@store/selectors';

import { Post } from '@components/Post';
import { usePaginate } from '@/hooks/usePaginate';
import { useSearch } from '@/hooks/useSearch';
import { PaginationUI } from '@components/Pagination';
import { Container, Stack } from 'react-bootstrap';
import { Header } from '@components/shared/Header';

export const Posts = () => {
    const posts = useSelector(getAllPosts, shallowEqual);

    const { search, onChangeSearch } = useSearch();

    const searchedPosts = search.length ? posts.filter((post) => post.title.includes(search)) : [];

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllPostsAction());
    }, []);

    const onUserPagePress = (id: string) => () => {
        navigate(`/user/${id}`);
        dispatch(fetchOpenedUserAction({ userId: id }));
    };

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const { visiblePosts, totalPages } = usePaginate(searchedPosts, posts, currentPage);

    return (
        <Stack gap={3}>
            <Header />
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
