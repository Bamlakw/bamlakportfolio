import React from 'react';
import styles from './yumGallery.module.scss';
import classNames from 'classnames';
import png1 from '../../../src/assets/yum/image1.webp';
import png2 from '../../../src/assets/yum/image2.webp';

export const YumGallery: React.FC = () => {
    return (
        <section
            className={classNames(
                'flex',
                'flex-col',
                'gap-8',
                'justify-center',
                'items-center',
                'w-full',
                styles.section1
            )}
        >
            <div
                className={classNames(
                    'flex',
                    'flex-col',
                    'gap-10',
                    'items-start',
                    'w-full',
                    styles.div1
                )}
            >
                <img
                    src={png1}
                    alt="Luna Product Showcase"
                    className={classNames(
                        'w-full',
                        'h-[1773px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img1
                    )}
                />
                <img
                    src={png2}
                    alt="Luna Product Showcase"
                    className={classNames(
                        'w-full',
                        'h-[1773px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img1
                    )}
                />
            </div>
        </section>
    );
};
