import styles from './ContactDescription.module.scss';
import classNames from 'classnames';
import { NavLink } from '@remix-run/react';

interface Project {
    year: string;
    name: string;
    type: string;
    link?: string;
}

const projects: Project[] = [
    {
        year: '2025',
        name: 'Outsider Drinks',
        type: 'Providing creative direction, design systems, UX documentation, information architecture, user research, prototyping, and web design.',

        link: '/outsider',
    },
    {
        year: '2025',
        name: 'Beast Blenders',
        type: 'Ecommerce, Concept Website Re-Design',
        link: '/beast',
    },
    {
        year: '2025',
        name: 'Living Things Soda',
        type: 'Concept Website Re-Design',
        link: '/livingthings',
    },
    {
        year: '2025',
        name: 'EnjoyaBowl Granola',
        type: 'Concept Mobile Application Design',
        link: '/enjoyabowl',
    },
    {
        year: '2024',
        name: 'Rush Drinks',
        type: 'Brand identity, Packaging, Webiste Design',
        link: '/rush',
    },
    {
        year: '2024',
        name: 'Luna Glow',
        type: 'Brand identity, Packaging, Webiste Design',
        link: '/luna',
    },
    { year: '2024', name: 'Nura Sound', type: 'Ecommerce, Web Redesign', link: '/nura' },
    { year: '2024', name: 'Yum', type: 'Brand identity, Mobile Application', link: '/yum' },
    { year: '2024', name: 'One Zero', type: 'Website Design', link: '/onezero' },
    { year: '2024', name: 'Velnoir', type: 'Ecommerce, Web Design', link: '/velnoir' },
    { year: '2023', name: 'Bake Today', type: 'Mobile Application Design', link: '/baketoday' },
    { year: '2023', name: 'Canim Perfume', type: 'Brand identity, Web Design', link: '/canim' },
    { year: '2023', name: 'Aquen', type: 'Brand identity, Web Design', link: '/aquen' },
    { year: '2023', name: 'Vela Beauty', type: 'Brand identity, Web Design', link: '/aquen' },
    {
        year: '2023',
        name: 'Aurellie Luggage',
        type: 'Brand identity, Website Design',
        link: '/aurellie',
    },
    {
        year: '2023',
        name: 'Festival Fits',
        type: 'Confidential Design Project',
        link: '/festivalfits',
    },
];

const ArrowIcon = ({ title }: { title?: string }) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.arrowSvg}
        aria-hidden={title ? 'false' : 'true'}
        role={title ? 'img' : 'img'}
    >
        TextText
    </svg>
);
export const ContactDescription: React.FC = () => {
    const disabledNames = [
        'One Zero',
        'Aquen',
        'Vela Beauty',
        'Festival Fits',
        'Bake Today',
        'Aurellie Luggage',
    ];
    return (
        <section
            className={classNames(
                'min-h-screen',
                'bg-white',
                'pt-8',
                'pb-16',
                'px-2',
                'sm:px-6',
                'lg:px-8',
                styles.section2
            )}
            aria-labelledby="work-grid-heading"
        >
            <div className={classNames('max-w-[1440px]', 'mx-auto', styles.div16)}>
                {/* Desktop header row */}
                <div
                    className={classNames(
                        'grid',
                        'lg:hidden', // hide on large screens
                        'grid-cols-1',
                        'gap-1',
                        'px-0',
                        'py-[6px]',
                        'mb-[11px]',
                        styles.div12Mobile
                    )}
                    role="row"
                >
                    <div className={classNames('text-[#B7B7B7]', styles.divIndex)}>Index</div>
                </div>

                {/* Desktop header: visible at lg and above */}
                <div
  className={classNames(
    'hidden',
    'lg:grid',
    'lg:[grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]',
    'gap-1',
    'px-0',
    'py-[6px]',
    'mb-[11px]',
    styles.div12
  )}
>

                    <div className={classNames('text-[#B7B7B7]', styles.div13)}>Year</div>
                    <div className={classNames('text-[#B7B7B7]', styles.div14)}>Project</div>
                    <div className={classNames('text-[#B7B7B7]', styles.div15)}>Type</div>
                    <div className={classNames('text-[#B7B7B7]', styles.div16)}>Responsiblity</div>
                </div>

                {/* Single DOM row per project — CSS handles wrapping and desktop grid */}
                <div className="pt-px">
                    {projects.map((project, index) => {
                        const isDisabled = disabledNames.includes(project.name);
                        const rowClasses = classNames(
                            styles.div7,
                            isDisabled ? styles.noHover : styles.interactive,
                            // add a11y-focusable style on rows that are links so keyboard users see focus
                            !isDisabled && project.link ? styles.focusable : null
                        );

                        const content = (
                            <>
                                <div className={styles.div8} aria-hidden="false">
                                    <span className={styles.yearText}>{project.year}</span>
                                </div>

                                <div className={styles.div9}>
                                    <span className={styles.titleText}>{project.name}</span>
                                </div>

                                <div className={styles.div10}>
                                    <span className={styles.typeText}>{project.type}</span>
                                </div>
                                <div className={styles.div10}>
                                    <span className={styles.typeText}>{project.type}</span>
                                </div>
                            </>
                        );

                        if (!project.link || isDisabled) {
                            return (
                                <div
                                    key={index}
                                    className={rowClasses}
                                    aria-disabled={isDisabled ? 'true' : undefined}
                                    tabIndex={
                                        isDisabled ? -1 : 0
                                    } /* still keyboard-focusable if no link? keep 0 for reading/selecting rows if desired */
                                >
                                    {content}
                                </div>
                            );
                        }

                        return (
                            <NavLink
                                key={index}
                                to={project.link}
                                className={({ isActive }) =>
                                    classNames(rowClasses, isActive ? styles.activeRow : null)
                                }
                                aria-label={`${project.name} — ${project.type}`}
                                title={`${project.name} — ${project.type}`}
                            >
                                {content}
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContactDescription;
