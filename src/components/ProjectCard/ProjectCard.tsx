import React from 'react';
import styles from './index.module.scss';
import Image from '../../images/codolog.png';

const ProjectCard: React.FunctionComponent = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src={Image} />
      </div>
      <div className={styles.card__content}>
        <h3 className={styles.content__title}>Codolog</h3>
        <p className={styles.content__subtitle}>Your Notes, Simplified</p>
        <p>
          A Cloud-based App For Notes, Thoughts, & Ideas. Build Especially For
          Developers.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
