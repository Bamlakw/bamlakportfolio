import React from 'react';
import styles from './beastHeader.module.scss';
import classNames from 'classnames';

export const BeastHeader: React.FC = () => {
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
                        Beast Blenders – Website Redesign & UX Concept
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
                            → Website (Design, Copywriting)
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
                        Beast Blenders is a high-performance wellness brand focused on thoughtfully designed blending systems and hydration tools. For this concept project, I redesigned the existing website to create a more minimal, organized, and user-focused experience. <br/> <br/> The redesign emphasizes clarity, premium aesthetics, and intuitive navigation, making it easier for users to explore products, discover recipes, and engage with the brand while reflecting Beast’s modern, lifestyle-driven identity.
                        <br />
                        
                    </p>
                </div>
            </div>
        </header>
    );
};
