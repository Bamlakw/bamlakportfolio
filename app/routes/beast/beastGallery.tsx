import React, { useRef, useState } from 'react';
import styles from './beastGallery.module.scss';
import classNames from 'classnames';
import image1 from '../../../src/assets/beast/image1.mp4';
import image3 from '../../../src/assets/beast/image3.webp';
import image4 from '../../../src/assets/beast/image4.webp';
import image5 from '../../../src/assets/beast/image5.webp';
import image6 from '../../../src/assets/beast/image6.webp';
import Image7 from '../../../src/assets/beast/image7.webp';
import image8 from '../../../src/assets/beast/image8.webp';
import image9 from '../../../src/assets/beast/image9.webp';

export const BeastGallery: React.FC = () => {
    // Play/Pause state
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
                <div className={classNames('relative', 'w-full')}>
                    <video
                        ref={videoRef}
                        src={image1}
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
                        <track kind="captions" src="" srcLang="en" label="English captions" default />
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
                        Beast Blenders is a high-performance wellness brand focused on thoughtfully designed blending systems and hydration tools. For this concept project, I redesigned the existing website to create a more minimal, organized, and user-focused experience. <br/> <br/> The redesign emphasizes clarity, premium aesthetics, and intuitive navigation, making it easier for users to explore products, discover recipes, and engage with the brand while reflecting Beast’s modern, lifestyle-driven identity.
                        <br />
                        
                    </p>
                <img
                    src={image3}
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
                <img
                    src={Image7}
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