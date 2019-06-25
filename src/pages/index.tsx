import React from 'react';
import Layout from '../layout';
import styles from './indexPage.module.scss';
import Intro from '../components/Intro/Intro';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <Intro />
      <About />
      <Projects />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
