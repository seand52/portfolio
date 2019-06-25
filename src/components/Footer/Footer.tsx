import React from 'react';
import styles from './index.module.scss';

const Footer: React.FunctionComponent = () => {
  return (
    <div className={styles.footer}>
      Made with <span className={styles.heart}>&hearts;</span> by Sean Daryanani
    </div>
  );
};

export default Footer;
