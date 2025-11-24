import * as React from 'react';
import BeastImg from '../../../src/assets/7.png';
import LivingImg from '../../../src/assets/23.png';
import OutsiderImg from '../../../src/assets/211.png';
import GranolaImg from '../../../src/assets/23.png';
import styles from './ProjectsGrid.module.scss';
import classNames from 'classnames';
import Frame10000060062Copy1Png from '../../../src/assets/homepage/beastt.webp';
import Frame1000006297Png from '../../../src/assets/homepage/enjoyabowll.webp';
import Frame10000062971Png from '../../../src/assets/homepage/livingthing.webp';
import Frame10000062975Png from '../../../src/assets/homepage/outsiderr.webp';

export const ProjectsGrid: React.FC = () => {
    const projects = [
        { id: 1, title: 'Outsider Drinks', image: OutsiderImg },
        { id: 2, title: 'Beast Blenders', image: BeastImg },
        { id: 3, title: 'Living Things Soda', image: LivingImg },
        { id: 4, title: 'Enjoyabowl Granola', image: GranolaImg },
    ];

    return (
        <div
            className={classNames(
                'min-h-screen',
                'bg-white',
                'px-4',
                'py-12',
                'md:px-8',
                'lg:px-16',
                styles.div10
            )}
        >
            <div className={classNames('mx-auto', 'max-w-[1424px]', styles.div9)}>
                {/* Header Section */}
                <div className={classNames('mb-6', 'flex', 'flex-col', styles.div8)}>
                    <div className="border-t border-[#B7B7B7]" />
                    <div className="flex justify-center py-4">
                        <h1
                            className={classNames(
                                'text-[24px]',
                                'font-[350]',
                                'leading-[24px]',
                                'tracking-[-0.72px]',
                                'text-[#1A1A1A]',
                                'font-[var(--my-pretty-font)]',
                                styles.header5
                            )}
                        >
                            Work
                        </h1>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className={classNames('flex', 'flex-col', 'gap-[22px]', styles.div7)}>
                    {/* First Row */}
                    <div
                        className={classNames(
                            'flex',
                            'flex-col',
                            'gap-[22px]',
                            'sm:flex-row',
                            'sm:gap-2',
                            styles.div1
                        )}
                    >
                      <div className={classNames('flex', 'flex-1', 'flex-col', 'gap-[6px]', styles.div2)}>
    <a href="/outsider" className="block w-full relative overflow-hidden">
        <div className="w-full pt-[125%] bg-[#f7f7f7]" /> {/* placeholder keeps height stable */}
        <img
            src={Frame10000062975Png}
            alt={projects[0].title}
            loading="lazy"
            className={classNames(
                'absolute',
                'top-0',
                'left-0',
                'w-full',
                'h-full',
                'object-cover',
                'transition-all',
                'duration-300',
                styles.img1
            )}
        />
    </a>

                            <h2
                                className={classNames(
                                    'text-[18px]',
                                    'font-[350]',
                                    'leading-[111%]',
                                    'tracking-[-0.48px]',
                                    'text-[#1A1A1A]',
                                    'font-[var(--my-pretty-font)]',
                                    styles.header1
                                )}
                            >
                                {projects[0].title}
                            </h2>
                        </div>

                        <div className={classNames('flex', 'flex-1', 'flex-col', 'gap-[6px]', styles.div3)}>
                            <a href="/beast" className="block w-full">
                                <img
                                    src={Frame10000060062Copy1Png}
                                    alt={projects[1].title}
                                    loading="lazy"
                                    className={classNames('h-auto', 'w-full', 'object-contain', styles.img2)}
                                />
                            </a>
                            <h2
                                className={classNames(
                                    'text-[18px]',
                                    'font-[350]',
                                    'leading-[111%]',
                                    'tracking-[-0.48px]',
                                    'text-[#1A1A1A]',
                                    'font-[var(--my-pretty-font)]',
                                    styles.header2
                                )}
                            >
                                {projects[1].title}
                            </h2>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div
                        className={classNames(
                            'flex',
                            'flex-col',
                            'gap-[22px]',
                            'sm:flex-row',
                            'sm:gap-2',
                            styles.div4
                        )}
                    >
                        <div className={classNames('flex', 'flex-1', 'flex-col', 'gap-[6px]', styles.div5)}>
                            <a href="/livingthings" className="block w-full">
                                <img
                                    src={Frame10000062971Png}
                                    alt={projects[2].title}
                                    loading="lazy"
                                    className={classNames('h-auto', 'w-full', 'object-cover', styles.img3)}
                                />
                            </a>
                            <h2
                                className={classNames(
                                    'text-[18px]',
                                    'font-[350]',
                                    'leading-[111%]',
                                    'tracking-[-0.48px]',
                                    'text-[#1A1A1A]',
                                    'font-[var(--my-pretty-font)]',
                                    styles.header3
                                )}
                            >
                                {projects[2].title}
                            </h2>
                        </div>

                        <div className={classNames('flex', 'flex-1', 'flex-col', 'gap-[6px]', styles.div6)}>
                            <a href="/enjoyabowl" className="block w-full">
                                <img
                                    src={Frame1000006297Png}
                                    alt={projects[3].title}
                                    loading="lazy"
                                    className={classNames('h-auto', 'w-full', 'object-cover', styles.img4)}
                                />
                            </a>
                            <h2
                                className={classNames(
                                    'text-[18px]',
                                    'font-[350]',
                                    'leading-[111%]',
                                    'tracking-[-0.48px]',
                                    'text-[#1A1A1A]',
                                    'font-[var(--my-pretty-font)]',
                                    styles.header4
                                )}
                            >
                                {projects[3].title}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};