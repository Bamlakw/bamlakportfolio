import styles from './ContactHeading.module.scss';
import classNames from 'classnames';
export function ContactHeading() {
    return <div
                                className={classNames(
                                    'border-b',
                                    'border-[#EDEDED]',
                                    'px-2.5',
                                    'py-2.5',
                                    styles.div44
                                )}
                            >
                                <div
                                    className={classNames(
                                        'grid',
                                        'grid-cols-[216px_251px_289px_1fr]',
                                        'gap-x-12',
                                        'md:gap-x-20',
                                        styles.div43
                                    )}
                                >
                                    <div
                                        className={classNames(
                                            'text-[21px]',
                                            'leading-[111%]',
                                            'tracking-[-0.72px]',
                                            'text-black',
                                            styles.div45
                                        )}
                                    >
                                        bamlakwtinsae@gmail.com
                                    </div>
                                    <a
                                        href="https://x.com/Bamlakwtinsae"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[21px] leading-[111%] tracking-[-0.72px] text-black underline"
                                    >
                                        x.com/Bamlakwtinsae
                                    </a>
                                    <div className="text-[21px] leading-[111%] tracking-[-0.72px] text-black">
                                        linkedIn.com/Bamlakwtinsae
                                    </div>
                                    <div className="text-[21px] leading-[111%] tracking-[-0.72px] text-black">
                                        instagram.com/Bamlakwtinsae
                                    </div>
                                </div>
                            </div>
                      
                   
               
}
