import { Link } from 'react-router-dom';

export const About = () => {
    return (
        <>
            <Link to={'/posts'}>posts</Link>
            <div>----</div>
            <Link to={'/user/1'}>user</Link>
            <div>about</div>
        </>
    );
};
