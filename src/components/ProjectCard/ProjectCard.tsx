import React from 'react';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
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
      <a href={project.link}>
        <FontAwesomeIcon
          className={styles.icon_more_info}
          icon={faInfoCircle}
        />
        <div className={styles.card__image}>
          <img src="https://abdalla.js.org/images/bun.png" />
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
