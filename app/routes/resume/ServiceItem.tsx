import React from 'react';
import styles from './ServiceItem.module.scss';
import classNames from 'classnames';

interface ServiceItemProps {
    service: string;
    isLast?: boolean;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service, isLast = false }) => {
    return (
        <div
            className={classNames(
                'overflow-hidden',
                'gap-2.5',
                'self-stretch',
                'py-7',
                'w-full',
                isLast ? 'pb-14' : '',
                'whitespace-nowrap',
                'border-t-2',
                'border-solid',
                'border-t-[color:var(--Black,#101010)]',
                'text-stone-950',
                'max-md:max-w-full',
                isLast ? 'max-md:pr-5' : '',
                styles.div1
            )}
        >
            {service } 
        </div>
    );
};

export default ServiceItem;
