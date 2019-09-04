import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../components/Header';
import './layout.scss';
import favicon16 from '../images/favicon-16x16.png';
import favicon32 from '../images/favicon-32x32.png';

interface LayoutProps {
  className?: string;
  children: JSX.Element[];
}

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

class Layout extends React.Component<LayoutProps, {}> {
  public render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={(data: StaticQueryProps) => {
          const { children } = this.props;

          return (
            <div className="portfolio-wrapper">
              <Helmet
                title="Sean Daryanani"
                meta={[
                  {
                    name: 'description',
                    content: 'Gatsby TypeScript Boilerplate Starter',
                  },
                  {
                    name: 'keywords',
                    content: [
                      'Professional Web Developer Barcelona',
                      'Web Design Solutions',
                      'Developer',
                      'Javascript',
                    ],
                  },
                ]}
                link={[
                  {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: `${favicon16}`,
                  },
                  {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: `${favicon32}`,
                  },
                ]}
              >
                <html lang="en" />
              </Helmet>
              <Header />
              {children}
            </div>
          );
        }}
      />
    );
  }
}

export default Layout;
