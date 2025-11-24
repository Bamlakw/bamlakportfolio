import React, { useRef, useState } from 'react';
import styles from './livingthings.module.scss';
import classNames from 'classnames';
import Png0 from '../../../src/assets/livingthings/video1.mp4';
import Png1 from '../../../src/assets/livingthings/image8.webp';
// import png9 from '../../../src/assets/livingthings/image9.png';
// import Png4 from '../../../src/assets/livingthings/image4.png';
// import Png3 from '../../../src/assets/livingthings/image7.png';
import Png5 from '../../../src/assets/livingthings/image5.webp';
import Png6 from '../../../src/assets/livingthings/image3.webp';
import Png10 from '../../../src/assets/livingthings/image2.webp';
import Png11 from '../../../src/assets/livingthings/image4.webp';
import Png12 from '../../../src/assets/livingthings/image11.webp';
// import Frame427319124LllPng from '../../../src/assets/livingthings/image1.png';


export const LivingthingsGallery: React.FC = () => {
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

                {/* <img
                    src={Frame427319124LllPng}
                    alt="Luna Product Showcase"
                    className={classNames(
                        'w-full',
                        'h-[1773px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img1
                    )}
                /> */}
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
                <img
                    src={Png6}
                    alt="Luna Product Details"
                    className={classNames(
                        'w-full',
                        'h-[1014.566px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img3
                    )}
                />
                {/* <img
                    src={Png4}
                    alt="Luna Brand Story"
                    className={classNames(
                        'w-full',
                        'h-[900px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img2
                    )}
                /> */}

                <img
                    src={Png11}
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
                    src={Png3}
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
                    src={Png1}
                    alt="Luna Collection"
                    className={classNames(
                        'w-full',
                        'h-[1014.566px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img5
                    )}
                />
                {/* <img
                    src={png9}
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
                    src={Png12}
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
