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

const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];
const trans1 = (x: number, y: number) =>
  `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x: number, y: number) =>
  `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x: number, y: number) =>
  `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x: number, y: number) =>
  `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

const Intro: React.FunctionComponent = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  // onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
  return (
    <article className={styles.intro}>
      <div className={styles.foreground}>
        <animated.div style={{ transform: props.xy.interpolate(trans1) }}>
          <h1 className={styles.foreground__title}>Sean Daryanani</h1>
          <p className={styles.foreground__description}>
            I'm a Full Stack Developer that specialises in Javascript
            technologies... for now!
          </p>
          <div className={styles.icons_container}>
            <FontAwesomeIcon className={styles.icon_twitter} icon={faTwitter} />
            <FontAwesomeIcon
              className={styles.icon_linkedin}
              icon={faLinkedinIn}
            />
            <FontAwesomeIcon className={styles.icon_github} icon={faGithub} />
            <FontAwesomeIcon className={styles.icon_dev} icon={faDev} />
          </div>
        </animated.div>
      </div>
      <div className={styles.background}>
        <div className={styles.background__shape} />
      </div>
    </article>
  );
};

export default Intro;
