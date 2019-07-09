import React from 'react';
import SubTitle from '../SubTitle';
import { navigate } from 'gatsby';
import styles from './index.module.scss';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projects } from './my_projects';
import { useSpring, animated } from 'react-spring';

const calc = (x: number, y: number): number[] => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];
const trans1 = (x: number, y: number): string =>
  `translate3d(${x / 10}px,${y / 10}px,0)`;

const Projects: React.FunctionComponent = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const handleClick = (link: string): void => {
    navigate(link);
  };
  return (
    <article className={styles.projects}>
      <div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        className={styles.projects_container}
      >
        <SubTitle text="Side Projects" />
        <div className={styles.projects_cards_container}>
          {projects.map(item => (
            <animated.div
              key={item.id}
              style={{ transform: props.xy.interpolate(trans1) }}
            >
              <ProjectCard project={item} onProjectClicked={handleClick} />
            </animated.div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Projects;
