import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredPosts } from '@store/selectors';
import { fetchFilteredPostsAction } from '@store/sagas/actions/actions';
import { Post } from '@components/Post';
import { useSearch } from '@/hooks/useSearch';
import { PaginationUI } from '@components/Pagination';
import { usePaginate } from '@/hooks/usePaginate';
import { Container, Stack } from 'react-bootstrap';

export const User = () => {
    const filteredPosts = useSelector(getFilteredPosts);
    const navigate = useNavigate();

    const { search, onChangeSearch } = useSearch();

    const searchedFilteredPosts = filteredPosts.filter((post) => post.title.includes(search));

    const { visiblePosts, handlePageChange, currentPage, totalPages } = usePaginate(
        searchedFilteredPosts,
        filteredPosts,
    );

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilteredPostsAction({ userId: id! }));
    }, []);

    const onUserPagePress = (id: string) => () => {
        navigate(`/user/${id}`);
    };

    return (
        <Stack gap={3}>
            <Link to="/">Posts</Link>
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
