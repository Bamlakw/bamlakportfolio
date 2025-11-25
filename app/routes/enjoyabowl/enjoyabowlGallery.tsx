import React, { useRef, useState } from 'react';
import styles from './enjoyabowl.module.scss';
import classNames from 'classnames';
import Png0 from '../../../src/assets/enjoyabowl/image4.mp4';
// import Png1 from '../../../src/assets/enjoyabowl/image8.png';
import png9 from '../../../src/assets/enjoyabowl/image9.webp';
import Png4 from '../../../src/assets/enjoyabowl/image6.mp4';
import Png3 from '../../../src/assets/enjoyabowl/image7.webp';
import Png5 from '../../../src/assets/enjoyabowl/image5.webp';
// import Png6 from '../../../src/assets/enjoyabowl/image3.png';
import Png10 from '../../../src/assets/enjoyabowl/image2.webp';
import Png11 from '../../../src/assets/enjoyabowl/image11.webp';
import Frame427319124LllPng from '../../../src/assets/enjoyabowl/image1.webp';
import beastGalleryStyles from '../beast/beastGallery.module.scss';

export const EnjoyabowlGallery: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const handlePlayPause = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
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
                    src={Frame427319124LllPng}
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
                    src={Png10}
                    alt="Luna Product Showcase"
                    className={classNames(
                        'w-full',
                        'h-[1773px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img1
                    )}
                />
                <p className={classNames(styles.p1, beastGalleryStyles.p1)}>
                    EnjoyaBowl is an Australian-Chinese superfood brand that blend fresh,
                    high-quality ingredients with Eastern and Western flavours. Specialising in
                    granola, it focuses on product development and refining a rich, layered taste
                    experiance. Beyond granola, EnjoyaBowl offers a range of wholesome, nature
                    ingredients and snaks.
                    <br /> <br />
                    <br />
                </p>

                <div className={classNames('relative', 'w-full')}>
                    <video
                        ref={videoRef}
                        src={Png0}
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/path/to/fallback-image.jpg"
                        className={classNames(
                            'w-full',
                            'h-[1773px]',
                            'max-lg:h-auto',
                            'object-cover',
                            styles.img2
                        )}
                    >
                        <track
                            kind="captions"
                            src=""
                            srcLang="en"
                            label="English captions"
                            default
                        />
                        Your browser does not support the video tag.
                    </video>
                    {/* Centered Play/Pause Button Overlay */}
                    <button
                        className={classNames(
                            'absolute',
                            'top-1/2',
                            'left-1/2',
                            '-translate-x-1/2',
                            '-translate-y-1/2',
                            'bg-white/80',
                            'hover:bg-white/95',
                            'rounded-[12px]',
                            'flex',
                            'items-center',
                            'justify-center',
                            'w-[80px]',
                            'h-[40px]',
                            'shadow-lg',
                            'transition-all',
                            styles.playPauseBtn
                        )}
                        onClick={handlePlayPause}
                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
                        style={{ zIndex: 2 }}
                    >
                        {isPlaying ? (
                            // Pause SVG
                            <svg width="30" height="30" viewBox="0 0 32 32">
                                <rect x="8" y="9" width="5" height="14" rx="2" fill="#333" />
                                <rect x="19" y="9" width="5" height="14" rx="2" fill="#333" />
                            </svg>
                        ) : (
                            // Play SVG
                            <svg width="30" height="30" viewBox="0 0 32 32">
                                <polygon points="10,9 26,16 10,23" fill="#333" />
                            </svg>
                        )}
                    </button>
                </div>
                <img
                    src={Png5}
                    alt="Luna Brand Story"
                    className={classNames(
                        'w-full',
                        'h-[900px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img2
                    )}
                />

                <div className={classNames('relative', 'w-full')}>
                    <video
                        ref={videoRef}
                        src={Png4}
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/path/to/fallback-image.jpg"
                        className={classNames(
                            'w-full',
                            'h-[1773px]',
                            'max-lg:h-auto',
                            'object-cover',
                            styles.img2
                        )}
                    >
                        <track
                            kind="captions"
                            src=""
                            srcLang="en"
                            label="English captions"
                            default
                        />
                        Your browser does not support the video tag.
                    </video>
                    {/* Centered Play/Pause Button Overlay */}
                    <button
                        className={classNames(
                            'absolute',
                            'top-1/2',
                            'left-1/2',
                            '-translate-x-1/2',
                            '-translate-y-1/2',
                            'bg-white/80',
                            'hover:bg-white/95',
                            'rounded-[12px]',
                            'flex',
                            'items-center',
                            'justify-center',
                            'w-[80px]',
                            'h-[40px]',
                            'shadow-lg',
                            'transition-all',
                            styles.playPauseBtn
                        )}
                        onClick={handlePlayPause}
                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
                        style={{ zIndex: 2 }}
                    >
                        {isPlaying ? (
                            // Pause SVG
                            <svg width="30" height="30" viewBox="0 0 32 32">
                                <rect x="8" y="9" width="5" height="14" rx="2" fill="#333" />
                                <rect x="19" y="9" width="5" height="14" rx="2" fill="#333" />
                            </svg>
                        ) : (
                            // Play SVG
                            <svg width="30" height="30" viewBox="0 0 32 32">
                                <polygon points="10,9 26,16 10,23" fill="#333" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* <img
                    src={Png5}
                    alt="Luna Brand Values"
                    className={classNames(
                        'w-full',
                        'h-[1014.566px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img4
                    )}
                /> */}

                <img
                    src={Png3}
                    alt="Luna Brand Values"
                    className={classNames(
                        'w-full',
                        'h-[1014.566px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img4
                    )}
                />
                {/* <img
                    src={Png1}
                    alt="Luna Collection"
                    className={classNames(
                        'w-full',
                        'h-[1014.566px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img5
                    )}
                /> */}
                <img
                    src={png9}
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
                    src={Png11}
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
