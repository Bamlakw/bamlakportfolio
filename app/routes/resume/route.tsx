import { LoaderFunctionArgs } from '@remix-run/node';
import { getUrlOriginWithPath } from '~/utils';
import styles from './route.module.scss';
import classNames from 'classnames';
// import AboutHeading from './AboutHeading';
// import styles from './route.module.scss';
// import classNames from 'classnames';
// import { useEffect } from 'react'; // 👈 add this
// import ServicesList from './ServicesList';
// import QuickIntro from './QuickIntro';

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};
export default function Resume() {
    return (
        <div
            className={classNames(
                'min-h-screen',
                'bg-white',
                'px-5',
                'py-12',
                'md:px-10',
                'lg:px-20',
                styles.div1
            )}
        >
            <div className="mx-auto max-w-[1402px]">
                {/* Introduction */}
                <section className={classNames('mb-24', 'md:mb-32', 'lg:mb-40', styles.section1)}>
                    <p
                        className={classNames(
                            'text-[21px]',
                            'leading-[111%]',
                            'tracking-[-0.72px]',
                            'text-black',
                            'md:text-[24px]',
                            styles.p1
                        )}
                    >
                        Independent web designer based in Ethiopia, working globally to create
                        purposeful, user-first digital experiences. I specialize in e-commerce,
                        wellness, and mission-driven brands, helping startups, studios, and
                        established companies build conversion-focused websites that communicate
                        clearly, feel modern, and deliver real results.
                    </p>
                </section>

                {/* Experience Section */}
                <section className="mb-20 md:mb-24 lg:mb-28">
                    <h2
                        className={classNames(
                            'mb-8',
                            'text-[28px]',
                            'leading-[111%]',
                            'tracking-[-0.72px]',
                            'text-black',
                            'md:mb-9',
                            styles.header1
                        )}
                    >
                        Experiance
                    </h2>

                    <div className={classNames('overflow-x-auto', styles.div6)}>
                        <div className="min-w-[800px]">
                            {/* Table Header */}
                            <div
                                className={classNames(
                                    'border-b',
                                    'border-[#EDEDED]',
                                    'pb-2.5',
                                    'pt-2.5',
                                    styles.div7
                                )}
                            >
                                <div
                                    className={classNames(
                                        'grid',
                                        'grid-cols-[216px_261px_293px_1fr]',
                                        'gap-x-12',
                                        'px-2.5',
                                        'md:gap-x-20',
                                        styles.div8
                                    )}
                                >
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-[#B7B7B7]',
                                            styles.div9
                                        )}
                                    >
                                        Years
                                    </div>
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-[#B7B7B7]',
                                            styles.div10
                                        )}
                                    >
                                        Company
                                    </div>
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-[#B7B7B7]',
                                            styles.div11
                                        )}
                                    >
                                        Role
                                    </div>
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-[#B7B7B7]',
                                            styles.div12
                                        )}
                                    >
                                        Responsibility
                                    </div>
                                </div>
                            </div>

                            {/* Experience Rows */}
                            <div
                                className={classNames(
                                    'border-b',
                                    'border-[#EDEDED]',
                                    'px-2.5',
                                    'py-5',
                                    styles.div13
                                )}
                            >
                                <div
                                    className={classNames(
                                        'grid',
                                        'grid-cols-[216px_261px_293px_1fr]',
                                        'gap-x-12',
                                        'md:gap-x-20',
                                        styles.div14
                                    )}
                                >
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-black',
                                            styles.div52
                                        )}
                                    >
                                        2025
                                    </div>
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-black',
                                            styles.div53
                                        )}
                                    >
                                        Apostolic Answers
                                    </div>
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-black',
                                            styles.div54
                                        )}
                                    >
                                        Lead Creative Designer
                                    </div>
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-black',
                                            styles.div55
                                        )}
                                    >
                                        Providing creative direction, design systems, UX
                                        documentation, information architecture, user research,
                                        prototyping, and web design.
                                    </div>
                                </div>
                            </div>

                            <div
                                className={classNames(
                                    'border-b',
                                    'border-[#EDEDED]',
                                    'px-2.5',
                                    'py-5',
                                    styles.div15
                                )}
                            >
                                <div
                                    className={classNames(
                                        'grid',
                                        'grid-cols-[216px_261px_293px_1fr]',
                                        'gap-x-12',
                                        'md:gap-x-20',
                                        styles.div16
                                    )}
                                >
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-black',
                                            styles.div56
                                        )}
                                    >
                                        2024
                                    </div>
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-black',
                                            styles.div57
                                        )}
                                    >
                                        Different Clients
                                    </div>
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-black',
                                            styles.div58
                                        )}
                                    >
                                        Website Designer
                                    </div>
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-black',
                                            styles.div59
                                        )}
                                    >
                                        Disciplined in creating diverse portfolio projects, website
                                        redesigns, UX reviews, and UI design for clients.
                                    </div>
                                </div>
                            </div>

                            <div
                                className={classNames(
                                    'border-b',
                                    'border-[#EDEDED]',
                                    'px-2.5',
                                    'py-5',
                                    styles.div17
                                )}
                            >
                                <div
                                    className={classNames(
                                        'grid',
                                        'grid-cols-[216px_261px_293px_1fr]',
                                        'gap-x-12',
                                        'md:gap-x-20',
                                        styles.div18
                                    )}
                                >
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-black',
                                            styles.div60
                                        )}
                                    >
                                        2023
                                    </div>
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-black',
                                            styles.div61
                                        )}
                                    >
                                        Jagnit Fashion Brand
                                    </div>
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-black',
                                            styles.div63
                                        )}
                                    >
                                        Graphics Designer
                                    </div>
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-black',
                                            styles.div62
                                        )}
                                    >
                                        creating social media posts, flyer and card Designs.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section className={classNames('mb-20', 'md:mb-24', 'lg:mb-28', styles.section3)}>
                    <h2
                        className={classNames(
                            'mb-8',
                            'text-[28px]',
                            'leading-[111%]',
                            'tracking-[-0.72px]',
                            'text-black',
                            'md:mb-9',
                            styles.header2
                        )}
                    >
                        Education
                    </h2>

                    <div className={classNames('overflow-x-auto', styles.div19)}>
                        <div className="min-w-[800px]">
                            {/* Table Header */}
                            <div
                                className={classNames(
                                    'border-b',
                                    'border-[#EDEDED]',
                                    'pb-2.5',
                                    'pt-2.5',
                                    styles.div20
                                )}
                            >
                                <div
                                    className={classNames(
                                        'grid',
                                        'grid-cols-[216px_261px_1fr]',
                                        'gap-x-12',
                                        'px-2.5',
                                        'md:gap-x-20',
                                        styles.div21
                                    )}
                                >
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-[#B7B7B7]',
                                            styles.div22
                                        )}
                                    >
                                        Years
                                    </div>
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-[#B7B7B7]',
                                            styles.div23
                                        )}
                                    >
                                        School
                                    </div>
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-[#B7B7B7]',
                                            styles.div24
                                        )}
                                    >
                                        Program
                                    </div>
                                </div>
                            </div>

                            {/* Education Rows */}
                            <div
                                className={classNames(
                                    'border-b',
                                    'border-[#EDEDED]',
                                    'px-2.5',
                                    'py-2.5',
                                    styles.div46
                                )}
                            >
                                <div
                                    className={classNames(
                                        'grid',
                                        'grid-cols-[216px_261px_1fr]',
                                        'gap-x-12',
                                        'md:gap-x-20',
                                        styles.div25
                                    )}
                                >
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-black',
                                            styles.div27
                                        )}
                                    >
                                        2022-2023
                                    </div>
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-black',
                                            styles.div28
                                        )}
                                    >
                                        Harvard University
                                    </div>
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-black',
                                            styles.div29
                                        )}
                                    >
                                        CS50
                                    </div>
                                </div>
                            </div>

                            <div
                                className={classNames(
                                    'border-b',
                                    'border-[#EDEDED]',
                                    'px-2.5',
                                    'py-2.5',
                                    styles.div26
                                )}
                            >
                                <div
                                    className={classNames(
                                        'grid',
                                        'grid-cols-[216px_261px_1fr]',
                                        'gap-x-12',
                                        'md:gap-x-20',
                                        styles.div33
                                    )}
                                >
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'font-[350]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-black',
                                            styles.div32
                                        )}
                                    >
                                        -
                                    </div>
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-black',
                                            styles.div30
                                        )}
                                    >
                                        Flux Academy
                                    </div>
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-black',
                                            styles.div31
                                        )}
                                    >
                                        UI / UX Design
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className={classNames('mb-20', 'md:mb-24', 'lg:mb-28', styles.section4)}>
                    <h2
                        className={classNames(
                            'mb-8',
                            'text-[28px]',
                            'leading-[111%]',
                            'tracking-[-0.72px]',
                            'text-black',
                            'md:mb-9',
                            styles.header2
                        )}
                    >
                        Services
                    </h2>
                    <div
                        className={classNames(
                            'border-b',
                            'border-[#EDEDED]',
                            'pb-2.5',
                            'pt-2.5',
                            styles.div20
                        )}
                    ></div>
                    <h2
                        className={classNames(
                            'mb-8',
                            'text-[28px]',
                            'leading-[111%]',
                            'tracking-[-0.72px]',
                            'text-black',
                            'md:mb-9',
                            styles.header3
                        )}
                    >
                        Mobile App Design
                    </h2>
                    <h2
                        className={classNames(
                            'mb-8',
                            'text-[28px]',
                            'leading-[111%]',
                            'tracking-[-0.72px]',
                            'text-black',
                            'md:mb-9',
                            styles.header3
                        )}
                    >
                        Website Design
                    </h2>
                    <h2
                        className={classNames(
                            'mb-8',
                            'text-[28px]',
                            'leading-[111%]',
                            'tracking-[-0.72px]',
                            'text-black',
                            'md:mb-9',
                            styles.header3
                        )}
                    >
                        Design System
                    </h2>
                    <h2
                        className={classNames(
                            'mb-8',
                            'text-[28px]',
                            'leading-[111%]',
                            'tracking-[-0.72px]',
                            'text-black',
                            'md:mb-9',
                            styles.header3
                        )}
                    >
                        User Experiance Research{' '}
                    </h2>
                    <h2
                        className={classNames(
                            'mb-8',
                            'text-[28px]',
                            'leading-[111%]',
                            'tracking-[-0.72px]',
                            'text-black',
                            'md:mb-9',
                            styles.header3
                        )}
                    >
                        UI UX Design{' '}
                    </h2>
                    <h2
                        className={classNames(
                            'mb-8',
                            'text-[28px]',
                            'leading-[111%]',
                            'tracking-[-0.72px]',
                            'text-black',
                            'md:mb-9',
                            styles.header3
                        )}
                    >
                        UX Feedback &amp; Consulting{' '}
                    </h2>
                    <h2
                        className={classNames(
                            'mb-8',
                            'text-[28px]',
                            'leading-[111%]',
                            'tracking-[-0.72px]',
                            'text-black',
                            'md:mb-9',
                            styles.header3
                        )}
                    >
                        Web / App Redesign{' '}
                    </h2>
                </section>
                <section>
                    <h2
                        className={classNames(
                            'mb-6',
                            'text-[20px]',
                            'sm:text-[22px]',
                            'md:text-[28px]',
                            'leading-[111%]',
                            'tracking-[-0.72px]',
                            'text-black',
                            'md:mb-9',
                            styles.header2
                        )}
                    >
                        Contact
                    </h2>

                    {/* NOTE: removed overflow-x-auto and fixed min-width so layout can wrap instead of scrolling */}
                    <div className={classNames('w-full', styles.div39)}>
                        <div className={classNames('w-full', styles.div40)}>
                            {/* Contact Header (visible only on large screens) */}

                            {/* Contact Links */}
                            <div
                                className={classNames(
                                    'px-2.5',
                                    'py-2.5',
                                    'border-b',
                                    'border-[#EDEDED]',
                                    styles.div44
                                )}
                            >
                                {/* Layout stacks vertically up to lg; only shows 4 columns at lg+ */}
                                <div
                                    className={classNames(
                                        'grid',
                                        'grid-cols-1',
                                        'lg:grid-cols-4',
                                        'gap-y-4',
                                        'gap-x-6',
                                        'lg:gap-x-12',
                                        styles.div43
                                    )}
                                >
                                    {/* Gmail */}
                                    <div className="flex flex-col w-full max-w-full">
                                        {/* label shown only on tablet/mobile (hidden on lg where header is visible) */}
                                        <div
                                            className={classNames(
                                                'text-[13px]',
                                                'text-[#B7B7B7]',
                                                'mb-1',
                                                'lg:hidden',
                                                styles.div66
                                            )}
                                        >
                                            Gmail
                                        </div>
                                        <div
                                            className={classNames(
                                                'text-[18px]',
                                                'lg:text-[21px]',
                                                'leading-[111%]',
                                                'tracking-[-0.72px]',
                                                'text-black',
                                                // allow wrapping of long text and prevent overflow
                                                'whitespace-normal',
                                                'break-words',
                                                'max-w-full',
                                                styles.div45
                                            )}
                                        >
                                            <a href="https://mail.google.com/mail/?view=cm&to=bamlakwtinsae@gmail.com">
                                                bamlakwtinsae@gmail.com{' '}
                                            </a>
                                        </div>
                                    </div>

                                    {/* X */}
                                    <div className="flex flex-col w-full max-w-full">
                                        <div
                                            className={classNames(
                                                'text-[13px]',
                                                'text-[#B7B7B7]',
                                                'mb-1',
                                                'lg:hidden',
                                                styles.div67
                                            )}
                                        >
                                            X
                                        </div>
                                        <a
                                            href="https://x.com/Bamlakwtinsae"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={classNames(
                                                'text-[18px]',
                                                'lg:text-[21px]',
                                                'leading-[111%]',
                                                'tracking-[-0.72px]',
                                                'text-black',
                                                'underline',
                                                // ensure long URL will wrap instead of causing horizontal scroll
                                                'whitespace-normal',
                                                'break-all',
                                                'max-w-full',
                                                styles.a1
                                            )}
                                        >
                                            x.com/Bamlakwtinsae
                                        </a>
                                    </div>

                                    {/* LinkedIn */}
                                    <div className="flex flex-col w-full max-w-full">
                                        <div
                                            className={classNames(
                                                'text-[13px]',
                                                'text-[#B7B7B7]',
                                                'mb-1',
                                                'lg:hidden',
                                                styles.div68
                                            )}
                                        >
                                            LinkedIn
                                        </div>
                                        <div
                                            className={classNames(
                                                'text-[18px]',
                                                'lg:text-[21px]',
                                                'leading-[111%]',
                                                'tracking-[-0.72px]',
                                                'text-black',
                                                'whitespace-normal',
                                                'break-words',
                                                'max-w-full',
                                                styles.div64
                                            )}
                                        >
                                            <a href="https://www.linkedin.com/in/bamlak-w-tinsae-21502a343?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bk%2FX1ZyxHRiKAfpcc%2B7fYEg%3D%3D">
                                                linkedIn.com/Bamlakwtinsae
                                            </a>
                                        </div>
                                    </div>

                                    {/* Instagram */}
                                    <div className="flex flex-col w-full max-w-full">
                                        <div
                                            className={classNames(
                                                'text-[13px]',
                                                'text-[#B7B7B7]',
                                                'mb-1',
                                                'lg:hidden',
                                                styles.div69
                                            )}
                                        >
                                            Instagram
                                        </div>
                                        <div
                                            className={classNames(
                                                'text-[18px]',
                                                'lg:text-[21px]',
                                                'leading-[111%]',
                                                'tracking-[-0.72px]',
                                                'text-black',
                                                'whitespace-normal',
                                                'break-words',
                                                'max-w-full',
                                                styles.div65
                                            )}
                                        >
                                            <a href="https://www.instagram.com/bamlakwtinsae/">instagram.com/Bamlakwtinsae</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
            </div>
        </div>
    );
}