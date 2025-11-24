import styles from './ContactDescription.module.scss';
import classNames from 'classnames';
export function ContactDescription() {
    return (
        <div
            className={classNames(
                'leading-7',
                'w-[508px]',
                'max-md:max-w-full',
                styles.div1,
                styles.div1
            )}
        >
            <p style={{}} className={styles.para}>
                If you have a project in mind and want to explore the possibility of working with
                me, send me an email and I will reply as soon as I can so we can discuss further
                details :)
            </p>
            {/* <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bamlakwtinsae@gmail.com&su=Let%27s%20Work%20Together"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.emailLink}
            >
                Bamlakwtinsae@gmail.com ↗
            </a> */}

            <section>
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
                                <div
                                    className={classNames(
                                        'flex',
                                        'flex-col',
                                        'w-full',
                                        'max-w-full',
                                        styles.div70
                                    )}
                                >
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
                                        bamlakwtinsae@gmail.com
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
                                        linkedIn.com/Bamlakwtinsae
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
                                        instagram.com/Bamlakwtinsae
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
