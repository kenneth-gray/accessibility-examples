import React from 'react';

import grannySmithUrl from '../../../images/granny-smith.png';
import Screen from '../../components/Screen';
import styles from './styles.scss';

const Images = () => (
  <Screen title="Images">
    <h1>Images</h1>
    <h2>Use appropriate alternative text</h2>
    <ul>
      <li>
        All <code>&lt;img&gt;</code> elements should have an <code>alt</code>{' '}
        property.
      </li>
      <li>
        The <code>alt</code> property should be empty (<code>""</code>) if the
        image is only decorative.
      </li>
    </ul>
    <h3>Example</h3>
    <h4>Granny Smith</h4>
    <img className={styles.apple} src={grannySmithUrl} alt="" />
    <p>
      The Granny Smith is a tip-bearing apple cultivar, which originated in
      Australia in 1868. It is named after Maria Ann Smith, who propagated the
      cultivar from a chance seedling. The tree is thought to be a hybrid of
      Malus sylvestris, the European wild apple, with the North American apple
      Malus pumila as the polleniser.
    </p>
    <p>
      The fruit is hard, with a light green skin and crisp, juicy flesh. The
      flavour is tart and acidic, which possibly limits raw consumption.
      However, it remains firm when baked, making it a very popular cooking
      apple used in pies, where it can be sweetened. The apple goes from being
      completely green to turning yellow when overripe.
    </p>
    <p>
      It is claimed to be the third most popular apple in America by the US
      Apple Association.
    </p>
    <p>
      The Granny Smith was one of four apples honored by the United States
      Postal Service in a 2013 set of four 33¢ stamps commemorating historic
      strains, joined by Northern Spy, Baldwin, and Golden Delicious.
    </p>
  </Screen>
);

export default Images;
