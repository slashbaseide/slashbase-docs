import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const ProductsList = [
  {
    title: 'Desktop IDE',
    description: (
      <>
        For individuals to use in local development environment
      </>
    ),
    link: "/docs/desktop-ide/installation"
  },
  {
    title: 'Server IDE',
    description: (
      <>
        For teams to use in server environment 
      </>
    ),
    link: "/docs/server-ide/installation"
  },
];

function Product({title, description, link}) {
  return (
    <div className={clsx('col col--6')+" "+styles.product}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link
            className="button button--secondary button--lg"
            to={link}>
            Install
        </Link>
      </div>
    </div>
  );
}

export default function HomepageProducts() {
  return (
    <section className={styles.products}>
      <h2 className="text--center">Products</h2>
      <div className="container">
        <div className="row">
          {ProductsList.map((props, idx) => (
            <Product key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
