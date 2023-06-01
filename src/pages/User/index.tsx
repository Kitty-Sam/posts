import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredPosts } from '@store/selectors';
import { fetchFilteredPostsAction } from '@store/sagas/actions/actions';
import { Post } from '@components/Post';
import { Paginate } from '@components/Paginate';
import { usePaginate } from '@/hooks/usePaginate';
import { useSearch } from '@/hooks/useSearch';

export const User = () => {
    const filteredPosts = useSelector(getFilteredPosts);
    const navigate = useNavigate();

    const { search, onChangeSearch } = useSearch();

    const searchedFilteredPosts = filteredPosts.filter((post) => post.title.includes(search));

    const { currentPosts, paginate, previousPage, nextPage, currentPage, postsPerPage } = usePaginate(
        searchedFilteredPosts.length ? searchedFilteredPosts : filteredPosts,
        1,
        10,
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
        <>
            <Link to="/">Posts</Link>
            <div>user with id `${id}`</div>
            <input value={search} onChange={onChangeSearch} placeholder={'Type to search...'} />
            <div>
                {currentPosts.map((post) => (
                    <Post post={post} onUserPagePress={onUserPagePress} key={post.id} />
                ))}
            </div>
            <Paginate
                postsPerPage={postsPerPage}
                totalPosts={filteredPosts.length}
                paginate={paginate}
                previousPage={previousPage}
                nextPage={nextPage}
                currentPage={currentPage}
            />
        </>
    );
};
