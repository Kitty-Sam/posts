import { Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import { FiBarChart2 } from 'react-icons/fi';
import styles from '@styles/Header.module.css';
export const Header = () => {
    const [showRoutes, setShowRoutes] = useState(false);

    const handleToggle = () => {
        setShowRoutes(!showRoutes);
    };

    return (
        <Navbar className={styles.wrapper}>
            <FiBarChart2 onClick={handleToggle} />
            {showRoutes && (
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={styles.routes}>
                        <Nav.Link href="/about" className={styles.link}>
                            About
                        </Nav.Link>
                        <Nav.Link href="/" className={styles.link}>
                            Posts
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            )}
        </Navbar>
    );
};
