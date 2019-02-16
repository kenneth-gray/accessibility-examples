import React, { MouseEvent } from 'react';
import {
  Link as RouterLink,
  LinkProps,
  RouteComponentProps,
  withRouter,
} from 'react-router-dom';
import routeManager from 'screen-reader-route-manager';

type Props = LinkProps & RouteComponentProps;

const Link = ({
  history,
  match,
  staticContext,
  location,
  onClick,
  ...rest
}: Props) => (
  <RouterLink
    onClick={callAll(moveFocus, onClick)}
    aria-current={rest.to === location.pathname ? 'page' : undefined}
    {...rest}
  />
);

export default withRouter(Link);

type LinkEvent = MouseEvent<HTMLAnchorElement>;
type LinkOnClick = ((event: LinkEvent) => void) | undefined;

function callAll(...fns: LinkOnClick[]) {
  return (event: LinkEvent) => fns.forEach(fn => fn && fn(event));
}

function moveFocus() {
  routeManager.beforeRouteChange();
}
