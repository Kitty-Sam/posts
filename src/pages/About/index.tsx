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
            <p className="lead">
                A Front-end Developer which is specialising in React, React Native and Nest.js development. I have
                completed IT-incubator courses (React/Redux), Udemy (React Native), Streamline (English).
            </p>
            <h2 className="display-7">Samuta Katerina</h2>
            <h2 className="display-6">samutic40@gmail.com</h2>
        </Stack>
    );
};
