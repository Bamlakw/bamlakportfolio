import * as React from 'react';
import styles from './WorkHeader.module.scss';
// import styles from './WorkHeader.module.scss';
// import classNames from 'classnames';

export const WorkHeader: React.FC = () => {
    return (
        <header className={styles.header3}>
            <p className={styles.p2}>
                A curated collection of websites and digital experiences I have designed.
            </p>
        </header>
    );
};
