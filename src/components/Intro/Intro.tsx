import React, { useState } from 'react';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
  faDev,
} from '@fortawesome/free-brands-svg-icons';
import quotes from './quotes';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from 'react-spring';

const calc = (x: number, y: number): number[] => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];
const trans1 = (x: number, y: number): string =>
  `translate3d(${x / 10}px,${y / 10}px,0)`;

const Intro: React.FunctionComponent = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const newQuote: MouseEvent<HTMLParagraphElement> = () => {
    const newNumber = Math.floor(Math.random() * quotes.length);
    setQuoteIndex(newNumber);
  };
  return (
    <article className={styles.intro}>
      <div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        className={styles.parallax_container}
      >
        <div className={styles.foreground}>
          <div className={styles.foreground_content}>
            <h1 className={styles.foreground__title}>Sean Daryanani</h1>
            <div className={styles.quote_container}>
              <blockquote className={styles.foreground__description}>
                {quotes[quoteIndex]}
              </blockquote>
            </div>
            <div className={styles.icons_container}>
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
              <a href="mailto:seand52@gmail.com">
                <FontAwesomeIcon
                  className={`${styles.icon_dev} ${styles.icon}`}
                  icon={faEnvelope}
                />
              </a>
              <a href="cv.pdf" download={true}>
                <img
                  className={`${styles.icon_twitter} ${styles.icon}`}
                  src="cv_icon.png"
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
