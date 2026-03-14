import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {Github, Mail, BookOpen} from 'lucide-react';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            <BookOpen size={20} style={{marginRight: 8, verticalAlign: 'middle'}} />
            Learn More About Me
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageLinks() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{justifyContent: 'center', gap: '2rem'}}>
          <div className="col col--3 text--center">
            <a href="https://github.com/WZhijun154" target="_blank" rel="noopener noreferrer"
               className={styles.featureLink}>
              <Github size={48} />
              <Heading as="h3">GitHub</Heading>
              <p>Check out my projects and contributions.</p>
            </a>
          </div>
          <div className="col col--3 text--center">
            <Link to="/docs/intro" className={styles.featureLink}>
              <BookOpen size={48} />
              <Heading as="h3">About Me</Heading>
              <p>Learn about my background, skills, and experience.</p>
            </Link>
          </div>
          <div className="col col--3 text--center">
            <Link to="/docs/contact" className={styles.featureLink}>
              <Mail size={48} />
              <Heading as="h3">Contact</Heading>
              <p>Get in touch with me.</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Vectras's personal website">
      <HomepageHeader />
      <main>
        <HomepageLinks />
      </main>
    </Layout>
  );
}
