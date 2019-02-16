import React from 'react';

import Link from '../components/Link';
import Screen from '../components/Screen';

const Links = () => (
  <Screen title="Links">
    <h1>Links</h1>
    <h2>Don't use the word link</h2>
    <p>
      Prefer <Link to="/">Home</Link> over <Link to="/">Link to home</Link>.
    </p>
    <h2>Make links readable out of context</h2>
    <p>
      Prefer: An apple is a sweet, edible fruit produced by an apple tree.{' '}
      <a href="https://en.wikipedia.org/wiki/Apple">
        Learn more about apples on Wikipedia
      </a>
      .
    </p>
    <p>
      Over: An apple is a sweet, edible fruit produced by an apple tree.{' '}
      <a href="https://en.wikipedia.org/wiki/Apple">Learn more</a>.
    </p>
    <h2>Use skip links where appropriate</h2>
    <p>
      In most cases this will likely just be{' '}
      <a href="#main">skip to main content</a>.
    </p>
  </Screen>
);

export default Links;
