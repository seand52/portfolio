import React from 'react';
import styles from './index.module.scss';
import SubTitle from '../SubTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const About: React.FunctionComponent = () => {
  return (
    <article className={styles.about_container}>
      <section className={`${styles.about} ${styles.about_section}`}>
        <SubTitle text="About" />
        <p>
          I am a senior developer. I wrote my first line of code 5 years ago
          when I was at college. Currently, I build Single Page Applications,
          PHP Websites, and Admin panels with the help of Laravel Framework and
          CSS/JavaScript bundlers like Webpack. My favorite JavaScript Framework
          is Vue. I love the Internet and anything opensource.
        </p>
      </section>
      <section className={`${styles.skills} ${styles.about_section}`}>
        <SubTitle text="What I am good at" />
        <div className={styles.skills_icons_container}>
          <FontAwesomeIcon
            className={`${styles.icon_html} ${styles.icon}`}
            icon={faHtml5}
          />
          <FontAwesomeIcon
            className={`${styles.icon_css} ${styles.icon}`}
            icon={faCss3}
          />
          <FontAwesomeIcon
            className={`${styles.icon_js} ${styles.icon}`}
            icon={faJs}
          />
          <FontAwesomeIcon
            className={`${styles.icon_react} ${styles.icon}`}
            icon={faReact}
          />
          <FontAwesomeIcon
            className={`${styles.icon_vue} ${styles.icon}`}
            icon={faVuejs}
          />
          <FontAwesomeIcon
            className={`${styles.icon_db} ${styles.icon}`}
            icon={faDatabase}
          />
        </div>
      </section>
      <div className={styles.shape} />
    </article>
  );
};

export default About;
