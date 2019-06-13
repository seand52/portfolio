import React from 'react';
import Layout from '../layout';
import styles from './indexPage.module.scss';
import Intro from '../components/Intro/Intro';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <Intro />
      <About />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
