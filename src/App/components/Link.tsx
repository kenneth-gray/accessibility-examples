import React, { MouseEvent } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

import { TOP_OF_PAGE_ID } from '../constants';

const Link = ({ onClick, ...rest }: LinkProps) => (
  <RouterLink onClick={callAll(moveFocus, onClick)} {...rest} />
);

export default Link;

// tslint:disable-next-line ban-types
function callAll(...fns: Array<Function | undefined>) {
  return (event: MouseEvent<HTMLAnchorElement>) =>
    fns.forEach(fn => fn && fn(event));
}

function moveFocus() {
  if (document.activeElement) {
    (document.activeElement as HTMLElement).blur();
  }

  const topOfPage = document.getElementById(TOP_OF_PAGE_ID);
  if (topOfPage) {
    topOfPage.focus();
    topOfPage.textContent = '';
  }
}
