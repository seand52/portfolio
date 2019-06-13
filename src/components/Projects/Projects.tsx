import React from 'react';
import SubTitle from '../SubTitle';
import styles from './index.module.scss';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects: React.FunctionComponent = () => {
  return (
    <div className={styles.projects_container}>
      <article className={styles.projects}>
        <SubTitle text="Side Projects" />
        <div className={styles.projects_cards_container}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </article>
    </div>
  );
};

export default Projects;
