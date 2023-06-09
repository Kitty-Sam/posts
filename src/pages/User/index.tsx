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
import { FiArrowLeft } from 'react-icons/fi';

export const User = () => {
    const filteredPosts = useSelector(getFilteredPosts, shallowEqual);
    const openedUser = useSelector(getOpenedUser, shallowEqual);

    const { email, phone, name } = openedUser;

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

    const onBackPress = () => {
        navigate('/');
    };

    return (
        <Stack gap={3}>
            <FiArrowLeft onClick={onBackPress} size={32} />
            <Container>
                <p className="lead">{name}</p>
                <p className="lead">{email}</p>
                <p className="lead">{phone}</p>
            </Container>
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
