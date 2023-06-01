import { Link } from 'react-router-dom';
import { Stack } from 'react-bootstrap';

export const About = () => {
    return (
        <Stack gap={3}>
            <p className="lead">Personal info</p>
            <Link to={'/'}>posts</Link>
        </Stack>
    );
};
