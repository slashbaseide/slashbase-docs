import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageProducts from '@site/src/components/HomepageProducts';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Documentation</h1>
        <p className="hero__subtitle">Read the technical docs and knowledgebase</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Documentation`}
      description="Read the technical docs and knowledgebase for Slashbase: Open-source database IDE">
      <HomepageHeader />
      <main>
        <HomepageProducts />
      </main>
    </Layout>
  );
}
