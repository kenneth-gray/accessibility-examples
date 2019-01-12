import React, { MouseEvent } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

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
  (document.activeElement as HTMLAnchorElement).blur();
  const topOfPage = document.getElementById('top-of-page');
  (topOfPage as HTMLElement).focus();
}
