import React from 'react';
import styles from './outsiderHeader.module.scss';
import classNames from 'classnames';

export const OutsiderHeader: React.FC = () => {
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
                <div>
                    <h1 className={styles.header4}>
                        Outsider – Concept Website Design <br />
                        
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
                            → Website (Design)
                            <br />
                            → Pitch deck (Strategy, Design)
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
                        Outsider is a bold, non-alcoholic beverage brand that blends global botanicals with clean energy to fuel adventurous, social, and active lifestyles. 
                        <br />
                        <br />
                        For this concept project, I designed a modern, immersive, and user-focused website experience.

The concept emphasizes minimalism, clarity, and dynamic storytelling, making it easy for users to explore flavors, understand functional benefits, and connect with the brand’s adventurous and lifestyle-driven identity  all while reflecting Outsider’s confident, inclusive, and energetic personality.
                       
                    </p>
                </div>
            </div>
        </header>
    );
};
