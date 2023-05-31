import { Link } from 'react-router-dom';

import styles from '@styles/About.module.css';

export const About = () => {
    return (
        <div>
            <div className={styles.title}>Personal info</div>
            <div className={styles.title}>Name</div>
            <Link to={'/posts'}>posts</Link>
        </div>
    );
};
