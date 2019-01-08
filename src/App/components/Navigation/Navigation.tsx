import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

const SkipLink = () => (
  <a className={`visually-hidden ${styles.skipLink}`} href="#main">
    Skip to main content
  </a>
);

type NavigationItemProps = {
  to: string;
  children: ReactNode;
};
const NavigationItem = ({ to, children }: NavigationItemProps) => (
  <li className={styles.li}>
    <Link className={styles.link} to={to}>
      {children}
    </Link>
  </li>
);

const Navigation = () => (
  <nav>
    <SkipLink />
    <ul className={styles.ul}>
      <NavigationItem to="/">Home</NavigationItem>
      <NavigationItem to="/headings">Headings</NavigationItem>
      <NavigationItem to="/inputs">Inputs</NavigationItem>
      <NavigationItem to="/links">Links</NavigationItem>
      <NavigationItem to="/images">Images</NavigationItem>
    </ul>
  </nav>
);

export default Navigation;
