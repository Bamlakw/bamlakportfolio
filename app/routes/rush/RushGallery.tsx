import React from 'react';
import styles from './RushGallery.module.scss';
import classNames from 'classnames';
import Png1 from '../../../src/assets/rush/image1.webp';
import png2 from '../../../src/assets/rush/image2.webp';
import Png3 from '../../../src/assets/rush/image3.webp';
import Png4 from '../../../src/assets/rush/image4.webp';
import Png5 from '../../../src/assets/rush/image5.webp';
import Png6 from '../../../src/assets/rush/image6.webp';

export const RushGallery: React.FC = () => {
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
                    src={Png1}
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
                    alt="Luna Brand Story"
                    className={classNames(
                        'w-full',
                        'h-[900px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img2
                    )}
                />
                <img
                    src={Png3}
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
                    src={Png4}
                    alt="Luna Brand Values"
                    className={classNames(
                        'w-full',
                        'h-[1014.566px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img4
                    )}
                />
                <img
                    src={Png5}
                    alt="Luna Collection"
                    className={classNames(
                        'w-full',
                        'h-[1014.566px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img5
                    )}
                />
                <img
                    src={Png6}
                    alt="Luna Collection"
                    className={classNames(
                        'w-full',
                        'h-[1014.566px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img6
                    )}
                />
                
                
            </div>
        </section>
    );
};
