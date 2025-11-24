import React from 'react';
import styles from './enjoyabowlHeader.module.scss';
import classNames from 'classnames';

export const EnjoyabowlHeader: React.FC = () => {
    return (
        <header
            className={classNames(
                'flex',
                'justify-between',
                'items-start',
                'w-full',
                'max-md:flex-col',
                'max-md:gap-10',
                styles.header1
            )}
        >
            <div className={styles.div3}>
                <div className={classNames(styles.div8, styles.div8, styles.div8)}>
                    <h1 className={styles.header4}>
                        Enjoyabowl – Concept Mobile App Design
                    </h1>
                    <div className={classNames('flex', 'gap-2', 'items-center', styles.div1)}>
                        DISCIPLINES
                    </div>
                    <div className={styles.div5}>
                        <h1
                            className={classNames(
                                'text-3xl',
                                'leading-9',
                                'text-stone-950',
                                'max-md:text-2xl',
                                'max-sm:text-2xl',
                                styles.header2
                            )}
                        >
                            → Product (UX, UI)
                            <br />
                            → Brand (Art Direction)
                            <br />
                            → Application (Design, Copywriting)
                            <br />
                            → Pitch deck (Strategy, Design, Copywriting)
                            <br />
                        </h1>
                    </div>
                    <div className={styles.div7}>
                       
                    </div>
                    <div className={classNames('flex', 'gap-2', 'items-center', styles.div1)}></div>
                </div>
                <div
                    className={classNames(
                        'flex',
                        'justify-end',
                        'items-center',
                        'w-[778px]',
                        'max-md:w-full',
                        styles.div2
                    )}
                >
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
                        EnjoyaBowl is a fresh, superfood brand that blends high-quality, natural ingredients with a unique East–West flavor experience.

For this concept project, I designed a modern, immersive, and user-focused mobile app experience. <br/><br/> The concept emphasizes clarity, simplicity, and a wholesome, approachable storytelling style, making it easy for users to explore products, discover ingredients, and connect with EnjoyaBowl’s healthy, flavorful, and lifestyle-driven identity all while reflecting the brand’s natural, playful, and uplifting personality.
                        
                    </p>
                </div>
            </div>
        </header>
    );
};
