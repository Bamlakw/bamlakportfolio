import React from 'react';
import styles from './nuraGallery.module.scss';
import classNames from 'classnames';
import Image1 from '../../../src/assets/nura/image1.webp';
import image2 from '../../../src/assets/nura/image2.webp';
import image3 from '../../../src/assets/nura/image3.jpg';
import image4 from '../../../src/assets/nura/image4.webp';

export const NuraGallery: React.FC = () => {
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
                    src={Image1}
                    alt="Luna Brand Story"
                    className={classNames(
                        'w-full',
                        'h-[900px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img1
                    )}
                />
                <img
                    src={image2}
                    alt="Luna Product Details"
                    className={classNames(
                        'w-full',
                        'h-[1014.566px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img3
                    )}
                />

                <img
                    src={image3}
                    alt="Luna Brand Story"
                    className={classNames(
                        'w-full',
                        'h-[900px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img1
                    )}
                />
                <img
                    src={image4}
                    alt="Luna Product Details"
                    className={classNames(
                        'w-full',
                        'h-[1014.566px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img3
                    )}
                />
            </div>
        </section>
    );
};
