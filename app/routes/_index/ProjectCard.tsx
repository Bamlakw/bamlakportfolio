import * as React from 'react';
import styles from './ProjectCard.module.scss';
import classNames from 'classnames';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  overlayColor: string; // unique for each card
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, overlayColor }) => {


  return (
    <article
  className={classNames('flex', 'flex-col', 'justify-center', 'w-full', styles.article1)}
>
  <div className={styles.cardContainer}>
    <img
      src={imageUrl}
      alt={title}
      className={classNames(
        'object-contain',
        'flex-1',
        'w-full',
        'aspect-[0.98]',
        'max-md:max-w-full',
        styles.image
      )}
    />
   <div className={styles.overlay} style={{ backgroundColor: overlayColor }}>
  <div className={styles.overlayContent}>
    <h3 className={styles.overlayText}>View Project</h3>
  </div>
</div>

  </div>
  <h3 className={classNames('mt-8', 'text-2xl', 'text-stone-950', styles.header1)}>
    {title}
  </h3>
</article>

  );
};