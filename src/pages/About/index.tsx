import { Container, Stack } from 'react-bootstrap';
import { Header } from '@components/shared/Header';
import { Avatar } from '@components/shared/Avatar';
import { initAvatar } from '@constants/initAvatar';

export const About = () => {
    return (
        <Stack gap={3}>
            <Header />
            <p className="lead">Personal info</p>
            <Container>
                <Avatar imageUrl={initAvatar} onClick={() => {}} />
            </Container>
            <h2 className="display-7">samutic40@gmail.com</h2>
        </Stack>
    );
};
