import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getFilteredPosts, getOpenedUser } from '@store/selectors';
import { fetchFilteredPostsAction } from '@store/sagas/actions/actions';
import { Post } from '@components/Post';
import { useSearch } from '@/hooks/useSearch';
import { PaginationUI } from '@components/Pagination';
import { usePaginate } from '@/hooks/usePaginate';
import { Container, Stack } from 'react-bootstrap';
import { Header } from '@components/shared/Header';

export const User = () => {
    const filteredPosts = useSelector(getFilteredPosts, shallowEqual);
    const openedUser = useSelector(getOpenedUser, shallowEqual);

    const navigate = useNavigate();

    const { search, onChangeSearch } = useSearch();

    const searchedFilteredPosts = search.length ? filteredPosts.filter((post) => post.title.includes(search)) : [];

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const { visiblePosts, totalPages } = usePaginate(searchedFilteredPosts, filteredPosts, currentPage);

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilteredPostsAction({ userId: id! }));
    }, []);

    const onUserPagePress = (id: string) => () => {
        navigate(`/user/${id}`);
    };

    console.log('openedUser', openedUser);
    return (
        <Stack gap={3}>
            <Header />
            <p className="lead">{openedUser.name}</p>
            <p className="lead">{openedUser.phone}</p>
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
