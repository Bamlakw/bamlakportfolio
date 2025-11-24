import React from 'react';
import styles from './livingthingsHeader.module.scss';
import classNames from 'classnames';

export const LivingthingsHeader: React.FC = () => {
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
                    <h1 className={styles.header4}>Living Things – Concept Website redesign</h1>
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
                            → Product (UX,UI)
                            <br />
                            → Brand (Evolution, Art Direction)
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
                        Living Things is a playful, low-sugar, all-natural sparkling soda brand designed for health-conscious consumers who want fun, flavorful drinks without compromising on wellness. With prebiotic bubbles and vibrant flavor combinations, Living Things encourages mindful indulgence and everyday refreshment.
                        <br />
                        <br />
                        For this concept project, I reimagined the Living Things brand and website to reflect its lively, health-forward personality. The redesign focuses on bright, approachable visuals, clear product storytelling, and an intuitive shopping experience—making it easy for users to explore flavors, understand functional benefits, and connect with the brand’s cheerful, wellness-driven identity.
                    </p>
                </div>
            </div>
        </header>
    );
};
