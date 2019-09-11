import React from 'react';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
  faDev,
} from '@fortawesome/free-brands-svg-icons';
import Image from '../../images/codolog.png';
import { InterfaceProjects } from '../Projects/my_projects';

interface ProjectCardProps {
  onProjectClicked: (id: string) => void;
  project: InterfaceProjects;
}

const ProjectCard: React.FunctionComponent = ({
  onProjectClicked,
  project,
}: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <a target="_blank" href={project.repo_link}>
        <FontAwesomeIcon
          className={`${styles.icon_github} ${styles.icon}`}
          icon={faGithub}
        />
      </a>
      <a target="_blank" href={project.link}>
        <div className={styles.card__image}>
          <img src="codolog.png" />
        </div>
        <div className={styles.card__content}>
          <h3 className={styles.content__title}>{project.title}</h3>
          <p className={styles.content__subtitle}>{project.subTitle}</p>
          <p>{project.description}</p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
