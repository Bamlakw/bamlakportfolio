import * as React from 'react';
import styles from './IntroSection.module.scss';
import classNames from 'classnames';

export const IntroSection: React.FC = () => {
    return (
        <div
            className={classNames(
                'min-h-screen',
                'bg-white',
                'flex',
                'items-center',
                'justify-center',
                'px-6',
                'md:px-12',
                'lg:px-20',
                styles.div6
            )}
        >
            <div className={classNames('w-full', 'max-w-[1415px]', 'flex', styles.div7)}>
                <div className="w-full max-w-[756px] flex flex-col justify-center gap-[18px]">
                    <div
                        className={classNames(
                            'flex',
                            'justify-center',
                            'items-center',
                            'p-[10px]',
                            styles.div8
                        )}
                    >
                        <p
                            className={classNames(
                                'text-[#1A1A1A]',
                                'font-normal',
                                'text-[20px]',
                                'md:text-[22px]',
                                'lg:text-[24px]',
                                'leading-[24px]',
                                'tracking-[-0.72px]',
                                styles.p3
                            )}
                        >
                            I&apos;m a multidisciplinary web designer working remotely with clients
                            around the world to build user-first websites, apps, and digital
                            experiences. I specialize in e-commerce, wellness, and purpose-driven
                            brands.
                        </p>
                    </div>

                    <div
                        className={classNames(
                            'flex',
                            'justify-start',
                            'items-center',
                            styles.contactRow
                        )}
                        style={{ padding: '0px' }}
                    >
                        <p
                            className={classNames(
                                'text-black',
                                'font-normal',
                                'text-[19px]',
                                'md:text-[21px]',
                                'lg:text-[23px]',
                                'leading-[24px]',
                                'tracking-[-0.72px]',
                                styles.p2
                            )}
                        >
                            Currently available for new projects
                            <br />
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
                                Send me an email ↗
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
