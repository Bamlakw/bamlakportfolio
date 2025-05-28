import * as React from 'react';
import styles from './WorkItem.module.scss';
import classNames from 'classnames';

interface WorkItemProps {
  imageUrl: string;
  altText: string;
  title: string;
  backgroundColor?: string;
  overlayColor: string;
}

export const WorkItem: React.FC<WorkItemProps> = ({
  imageUrl,
  altText,
  title,
  overlayColor,
}) => {
  return (
    <article
      className={classNames('flex flex-col justify-center w-full', styles.article1)}
    >
      <div className={styles.cardContainer}>
        <img
          src={imageUrl}
          alt={altText}
          className={classNames(
            'object-contain w-full aspect-[0.98] max-md:max-w-full',
            styles.image
          )}
        />
        <div className={styles.overlay} style={{ backgroundColor: overlayColor }}>
          <div className={styles.overlayContent}>
            <h3 className={styles.overlayText}>View Project</h3>
          </div>
        </div>
      </div>
      <h3 className={classNames('mt-8 text-2xl text-stone-950', styles.header1)}>
        {title}
      </h3>
    </article>
  );
};
