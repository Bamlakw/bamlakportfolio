import React from 'react';
import ServiceItem from './ServiceItem';
import styles from './ServicesList.module.scss';
import classNames from 'classnames';

const ServicesList: React.FC = () => {
    const services = ['Web/App Design', 'UX/UI Design', 'Branding', 'Consulting'];

    return (
        <div
            className={classNames(
                'mt-32',
                'w-full',
                'text-xl',
                'leading-tight',
                'max-w-[1360px]',
                'max-md:mt-10',
                'max-md:max-w-full',
                styles.div1
            )}
        >
            <div className={styles.div2}>
                <h1 className={styles.header1}>Services</h1>
            </div>
            {services.map((service, index) => (
                <ServiceItem key={index} service={service} isLast={index === services.length - 1} />
            ))}
        </div>
    );
};

export default ServicesList;
