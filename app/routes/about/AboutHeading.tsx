import React from 'react';
import styles from './AboutHeading.module.scss';
import classNames from 'classnames';

const AboutHeading: React.FC = () => {
    return (
        <header
            className={classNames(
                'w-full',
                'tracking-wide',
                'leading-none',
                'text-center',
                'whitespace-nowrap',
                'text-[300px]',
                'max-md:max-w-full',
                'max-md:text-4xl',
                styles.header1
            )}
        >
            <h1 className={classNames('max-md:max-w-full', 'max-md:text-4xl', styles.header2)}>
                Quick Intro{' '}
            </h1>
        </header>
    );
};

export default AboutHeading;
