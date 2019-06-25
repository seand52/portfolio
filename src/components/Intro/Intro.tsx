import React from 'react';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
  faDev,
} from '@fortawesome/free-brands-svg-icons';
import { useSpring, animated } from 'react-spring';

const calc = (x: number, y: number): number[] => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];
const trans1 = (x: number, y: number): string =>
  `translate3d(${x / 10}px,${y / 10}px,0)`;

const Intro: React.FunctionComponent = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <article className={styles.intro}>
      <div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        className={styles.parallax_container}
      >
        <div className={styles.foreground}>
          <div className={styles.foreground_content}>
            <h1 className={styles.foreground__title}>Sean Daryanani</h1>
            <p className={styles.foreground__description}>
              I'm a Full Stack Developer that specialises in Javascript
              technologies... for now!
            </p>
            <div className={styles.icons_container}>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/seandaryanani/"
              >
                <FontAwesomeIcon
                  className={`${styles.icon_twitter} ${styles.icon}`}
                  icon={faTwitter}
                />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/seandaryanani/"
              >
                <FontAwesomeIcon
                  className={`${styles.icon_linkedin} ${styles.icon}`}
                  icon={faLinkedinIn}
                />
              </a>
              <a target="_blank" href="https://github.com/seand52">
                <FontAwesomeIcon
                  className={`${styles.icon_github} ${styles.icon}`}
                  icon={faGithub}
                />
              </a>
              <a target="_blank" href="https://dev.to/seand52">
                <FontAwesomeIcon
                  className={`${styles.icon_dev} ${styles.icon}`}
                  icon={faDev}
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.background}>
          <div className={styles.transform}>
            <animated.div
              style={{ transform: props.xy.interpolate(trans1) }}
              className={styles.background__shape}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Intro;
