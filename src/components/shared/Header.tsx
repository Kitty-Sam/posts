import { Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import styles from '@styles/Header.module.css';
import { Avatar } from '@components/shared/Avatar';
import { initAvatar } from '@constants/initAvatar';
export const Header = () => {
    const [showRoutes, setShowRoutes] = useState(false);

    const handleToggle = () => {
        setShowRoutes(!showRoutes);
    };

    return (
        <Navbar className={styles.wrapper}>
            <FiAlignJustify onClick={handleToggle} size={32} />
            {showRoutes && (
                <Navbar.Collapse id="basic-navbar-nav" className={styles.routes}>
                    <Nav>
                        <Nav.Link href="/about" className={styles.link}>
                            About
                        </Nav.Link>
                        <Nav.Link href="/" className={styles.link}>
                            Posts
                        </Nav.Link>
                    </Nav>
                    <Avatar imageUrl={initAvatar} onClick={() => {}} />
                    <p className="lead">Samuta Katerina</p>
                    <p className="lead">samutic40@gmail.com</p>
                </Navbar.Collapse>
            )}
        </Navbar>
    );
};
