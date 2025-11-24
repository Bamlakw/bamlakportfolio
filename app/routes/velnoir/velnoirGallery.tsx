import React from 'react';
import styles from './velnoirGallery.module.scss';
import classNames from 'classnames';
// import Png1 from '../../../src/assets/velnoir/image2.png';

export const VelnoirGallery: React.FC = () => {
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
{/*                 
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
                /> */}
               
            </div>
        </section>
    );
};
