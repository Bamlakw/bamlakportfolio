import styles from './QuickIntro.module.scss';
import classNames from 'classnames';

const QuickIntro = () => {
    return (
        <section className="flex overflow-hidden flex-col justify-center py-32 bg-white max-md:py-24">
            <div className="w-full max-md:max-w-full">
                <div className="mt-10 w-full text-2xl leading-7 text-black max-md:mt-10 max-md:max-w-full">
                    <TextSection section={1} />
                    <TextSection section={2} className="mt-10 max-md:mt-10" noBorderTop />
                </div>
            </div>
        </section>
    );
};

interface TextSectionProps {
    className?: string;
    noBorderTop?: boolean;
    section: 1 | 2;
}

const TextSection = ({ className = '', noBorderTop = false, section }: TextSectionProps) => {
    const borderClasses = noBorderTop ? 'border-b border-black' : 'border-t border-b border-black';

    return (
        <article
            className={classNames(
                'flex',
                'flex-col',
                'justify-center',
                'items-center',
                'p-2.5',
                'w-full',
                borderClasses,
                'max-md:max-w-full',
                className,
                styles.article1
            )}
        >
            <div className={classNames('max-w-full', 'min-h-[279px]', 'w-[828px]', styles.div1)}>
                <BioContent section={section} />
            </div>
        </article>
    );
};

interface BioContentProps {
    section: 1 | 2;
}

const BioContent = ({ section }: BioContentProps) => {
    if (section === 1) {
        return (
            <>
                <p className={classNames('text-black leading-[27px] max-md:max-w-full', styles.p1)}>
                    I&apos;m a web designer based in Ethiopia, blending clean visuals, intuitive
                    interaction, and thoughtful storytelling into every project. I work with clients
                    worldwide, creating digital experiences that are both functional and emotionally
                    resonant.
                </p>
                <p className={classNames('text-black leading-[27px] max-md:max-w-full', styles.p2)}>
                    With a background in graphic design and front-end development, I bring a multidisciplinary approach to web design — combining aesthetics with logic to craft sites that feel as good as they look. From wellness brands and e-commerce shops to bold startups, I design with clarity, movement, and connection in mind.
                </p>
            </>
        );
    }

    return (
        <>
            <p className={classNames('text-black leading-[27px] max-md:max-w-full', styles.p3)}>
                My journey into web design began with a love for visuals and evolved into a passion for making them come alive. I studied computer science through Harvard’s CS50 course and have since dedicated myself to building interfaces that are responsive, intentional, and made to move people.
            </p>
            <p className={classNames('text-black leading-[27px] max-md:max-w-full', styles.p4)}>
                I believe great design solves problems — not just with beauty, but with purpose. That’s why I care about how things work, how they flow, and how they make people feel. I love collaborating with mission-driven teams who value clarity, emotion, and impact.
            </p>
        </>
    );
};

export default QuickIntro;
