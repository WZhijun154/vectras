import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';
import {Github, Mail, BookOpen} from 'lucide-react';

import styles from './index.module.css';

function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      {/* Geometric decorations */}
      <div className={styles.decoRing} />
      <div className={styles.decoLine} />
      <div className={styles.decoDot} />

      <div className={styles.heroInner}>
        <Heading as="h1" className={styles.title}>
          {siteConfig.title}
        </Heading>
        <Link className={styles.ctaButton} to="/docs/intro">
          <BookOpen size={20} />
          <Translate id="homepage.learnMore">Learn More About Me</Translate>
        </Link>
      </div>
    </header>
  );
}

function HomepageLinks() {
  return (
    <section className={styles.links}>
      <div className={styles.cardGrid}>
        <a
          href="https://github.com/WZhijun154"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <Github size={40} className={styles.cardIcon} />
          <Heading as="h3">GitHub</Heading>
          <p>
            <Translate id="homepage.github.desc">
              Check out my projects and contributions.
            </Translate>
          </p>
        </a>

        <Link to="/docs/intro" className={styles.card}>
          <BookOpen size={40} className={styles.cardIcon} />
          <Heading as="h3">
            <Translate id="homepage.aboutMe">About Me</Translate>
          </Heading>
          <p>
            <Translate id="homepage.aboutMe.desc">
              Learn about my background, skills, and experience.
            </Translate>
          </p>
        </Link>

        <Link to="/docs/contact" className={styles.card}>
          <Mail size={40} className={styles.cardIcon} />
          <Heading as="h3">
            <Translate id="homepage.contact">Contact</Translate>
          </Heading>
          <p>
            <Translate id="homepage.contact.desc">
              Get in touch with me.
            </Translate>
          </p>
        </Link>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({id: 'homepage.title', message: 'Home'})}
      description={translate({
        id: 'homepage.description',
        message: "Vectras's personal website",
      })}
    >
      <HomepageHero />
      <main>
        <HomepageLinks />
      </main>
    </Layout>
  );
}
