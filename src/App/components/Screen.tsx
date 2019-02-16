import { Component } from 'react';
import routeManager from 'screen-reader-route-manager';

type Props = {
  title: string;
};

class Screen extends Component<Props> {
  public componentDidMount() {
    screenUpdate(this.props.title);
  }

  public componentDidUpdate() {
    screenUpdate(this.props.title);
  }

  public render() {
    return this.props.children;
  }
}

export default Screen;

function screenUpdate(title: string) {
  // Always update the title regardless of focus management.
  const documentTitle = `${title} - Accessibility examples`;
  document.title = documentTitle;

  routeManager.afterRouteChange();
}
