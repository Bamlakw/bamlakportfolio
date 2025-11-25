import React from 'react';
import styles from './outsiderGallery.module.scss';
import classNames from 'classnames';
import Image1 from '../../../src/assets/outsider/image1.webp';
import image2 from '../../../src/assets/outsider/image2.webp';
// import image3 from '../../../src/assets/outsider/image3.webp';
import image4 from '../../../src/assets/outsider/image4.webp';
import image5 from '../../../src/assets/outsider/image5.webp';
import image6 from '../../../src/assets/outsider/image6.webp';
// import Image7 from '../../../src/assets/outsider/image7.webp';
import image8 from '../../../src/assets/outsider/image8.webp';
import image9 from '../../../src/assets/outsider/image9.webp';
import image10 from '../../../src/assets/outsider/image10.webp';
import image11 from '../../../src/assets/outsider/image11.webp';
import image12 from '../../../src/assets/outsider/image12.webp';

export const OutsiderGallery: React.FC = () => {
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
                <p
                    className={classNames(
                        'flex-1',
                        'text-3xl',
                        'leading-9',
                        'opacity-[0.96]',
                        'text-stone-950',
                        'max-md:text-2xl',
                        'max-sm:text-2xl',
                        styles.p1
                    )}
                >
                    Outsiders is for the curious, the daring, the ones who want flavor, energy and
                    adventure in every sip. Crafted from global botanicals and designed to stand
                    out, it&apos;s a drink that sparks conversation, fuels experiances and keeps you
                    present. <br /> <br />
                    <br />
                </p>
                <img
                    src={image4}
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
                    src={image5}
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
                    src={image6}
                    alt="Luna Collection"
                    className={classNames(
                        'w-full',
                        'h-[1014.566px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img5
                    )}
                />
                <p
                    className={classNames(
                        'flex-1',
                        'text-3xl',
                        'leading-9',
                        'opacity-[0.96]',
                        'text-stone-950',
                        'max-md:text-2xl',
                        'max-sm:text-2xl',
                        styles.p1
                    )}
                >
                    Outsider do things differently. sourcing rare botanicas from producers accross
                    the world. Fermented, distilled or pressed into non-alcholic beverages for
                    discerning drinks.
                    <br /> <br />
                    Our aim was to highlight the importance of discovery and the dourcing of premium
                    botanicals, whilst creating impact and shaking up the market.
                    <br />
                </p>
                <img
                    src={image8}
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
                    src={image9}
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
                    src={image10}
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
                    src={image11}
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
                    src={image12}
                    alt="Luna Collection"
                    className={classNames(
                        'w-full',
                        'h-[1014.566px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img5
                    )}
                />
            </div>
        </section>
    );
};
