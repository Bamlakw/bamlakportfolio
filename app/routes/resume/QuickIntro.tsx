import styles from './QuickIntro.module.scss';
import classNames from 'classnames'; // import React from "react";

export default function QuickIntro() {
    return (
        <div className="min-h-screen bg-white text-[#1A1A1A] px-4 py-8 md:px-8 lg:px-16">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col gap-12 pt-32">
                    {/* Bio Section */}
                    <div className={classNames('max-w-[773px]', styles.div2)}>
                        <p className="text-2xl font-[350] leading-[111%] tracking-[-0.72px]">
                            Independent web designer based in Ethiopia, working globally to create
                            purposeful, user-first digital experiences. I specialize in e-commerce,
                            wellness, and mission-driven brands, helping startups, studios, and
                            established companies bring their ideas to life online. My work spans
                            websites, apps, and digital products, with a focus on clarity,
                            usability, and meaningful design. Collaborating with other creatives and
                            clients worldwide, I deliver solutions that are both functional and
                            visually engaging. I'm available for freelance projects and
                            collaborations, bringing thoughtful design and attention to detail to
                            every project I take on.
                        </p>
                    </div>

                    {/* Services Section */}
                    <div className={classNames('flex', 'flex-col', 'gap-6', styles.div3)}>
                        <div
                            className={classNames(
                                'border-b',
                                'border-[#EDEDED]',
                                'pb-1.5',
                                'pt-1.5',
                                styles.div4
                            )}
                        >
                            <div
                                className={classNames(
                                    'grid',
                                    'grid-cols-1',
                                    'md:grid-cols-[auto_1fr_auto_auto]',
                                    'gap-4',
                                    'items-start',
                                    styles.div5
                                )}
                            >
                                <div className="text-2xl font-[350] leading-[120%] tracking-[-0.72px]">
                                    Services
                                </div>
                                <div></div>
                                <div className="text-2xl font-[350] leading-[120%] tracking-[-0.72px] text-[#B7B7B7]">
                                    Ecommerce
                                </div>
                                <div></div>
                            </div>
                        </div>

                        <div
                            className={classNames(
                                'border-b',
                                'border-[#EDEDED]',
                                'pb-1.5',
                                'pt-1.5',
                                styles.div6
                            )}
                        >
                            <div
                                className={classNames(
                                    'grid',
                                    'grid-cols-1',
                                    'md:grid-cols-[auto_1fr_auto_auto]',
                                    'gap-4',
                                    'items-start',
                                    styles.div7
                                )}
                            >
                                <div></div>
                                <div></div>
                                <div className="text-2xl font-[350] leading-[120%] tracking-[-0.72px]">
                                    Apps Design
                                </div>
                                <div className="text-2xl font-[350] leading-[120%] tracking-[-0.72px]">
                                    Design Consulting
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-[#EDEDED] pb-1.5 pt-1.5">
                            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto_auto] gap-4 items-start">
                                <div></div>
                                <div></div>
                                <div className="text-2xl font-[350] leading-[120%] tracking-[-0.72px]">
                                    Website Design
                                </div>
                                <div className="text-2xl font-[350] leading-[120%] tracking-[-0.72px]">
                                    UI/UX Design
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-[#EDEDED] pb-1.5 pt-1.5">
                            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto_auto] gap-4 items-start">
                                <div></div>
                                <div></div>
                                <div className="text-2xl font-[350] leading-[120%] tracking-[-0.72px]">
                                    UX Review
                                </div>
                                <div className="text-2xl font-[350] leading-[120%] tracking-[-0.72px]">
                                    Design System
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="flex flex-col gap-6 mt-6">
                        <div className="text-2xl font-[350] leading-[120%] tracking-[-0.72px] pb-4">
                            Education
                        </div>

                        <div className="border-b border-[#EDEDED] pb-1">
                            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 items-start">
                                <div className="text-2xl font-[350] leading-[24px] tracking-[-0.72px] text-[#B7B7B7]">
                                    Years
                                </div>
                                <div></div>
                                <div className="text-2xl font-[350] leading-[120%] tracking-[-0.72px] text-[#B7B7B7]">
                                    School
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-[#EDEDED] pb-1.5 pt-1.5">
                            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 items-start">
                                <div className="text-2xl font-[350] leading-[24px] tracking-[-0.72px]">
                                    2007.09 – 2009.03
                                </div>
                                <div></div>
                                <div className="text-2xl font-[350] leading-[120%] tracking-[-0.72px]">
                                    CS50 Harvard University
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mail / Social Section */}
                    <div className="flex flex-col gap-0 mt-6">
                        <div className="border-b border-[#EDEDED] pb-1.5 pt-1.5">
                            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto_auto] gap-4 items-start">
                                <div className="text-2xl font-[350] leading-[120%] tracking-[-0.72px]">
                                    Mail
                                </div>
                                <div></div>
                                <div className="text-2xl font-[350] leading-[120%] tracking-[-0.72px] text-[#B7B7B7]">
                                    Social
                                </div>
                                <div></div>
                            </div>
                        </div>

                        <div className="border-b border-[#EDEDED] pb-1.5 pt-1.5">
    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto_auto] gap-4 items-start">
        <a
                                href="https://mail.google.com/mail/?view=cm&to=bamlakwtinsae@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classNames(
                                    'underline',
                                    'decoration-solid',
                                    'underline-offset-auto',
                                    'hover:opacity-70',
                                    'transition-opacity',
                                    styles.a2
                                )}
                            >
      Bamlakwtinsae@gmail.com
    </a>
        <div></div>
        <a
            href="https://www.linkedin.com/in/bamlak-w-tinsae-21502a343?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bk%2FX1ZyxHRiKAfpcc%2B7fYEg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-[350] leading-[120%] tracking-[-0.72px] hover:opacity-70 transition-opacity"
        >
            Linkedin
        </a>
        <a
            href="https://x.com/Bamlakwtinsae"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-[350] leading-[120%] tracking-[-0.72px] hover:opacity-70 transition-opacity"
        >
            X
        </a>
    </div>
</div>

<div className="border-b border-[#EDEDED] pb-1.5 pt-1.5">
    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto_auto] gap-4 items-start">
        <div></div>
        <div></div>
        <a
            href="https://www.instagram.com/bamlakwtinsae/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-[350] leading-[120%] tracking-[-0.72px] hover:opacity-70 transition-opacity"
        >
            Instagram
        </a>
        <div></div>
    </div>
</div>
</div>
                </div>
            </div>
        </div>
    );
}
