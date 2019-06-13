import React from 'react';
import styles from './index.module.scss';

interface PropsInt {
  text: string;
}

const SubTitle = ({ text }: PropsInt) => {
  return <h2 className={styles.subtitle}>{text}</h2>;
};

export default SubTitle;
