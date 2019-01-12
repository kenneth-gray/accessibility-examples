import { Component, ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

class Screen extends Component<Props> {
  componentDidMount() {
    spaLoad(this.props.title);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.title !== this.props.title) {
      spaLoad(this.props.title);
    }
  }

  render() {
    return this.props.children;
  }
}

export default Screen;

function spaLoad(title: string) {
  const documentTitle = `${title} - Accessibility examples`;
  document.title = documentTitle;

  const liveRegion = document.getElementById('live-region');
  if (!liveRegion) {
    const newLiveRegion = document.createElement('span');
    newLiveRegion.setAttribute('aria-live', 'polite');
    newLiveRegion.setAttribute('role', 'status');

    const body = document.querySelector('body') as HTMLElement;
    body.appendChild(newLiveRegion);

    return;
  }

  liveRegion.textContent = documentTitle;
  setTimeout(() => {
    liveRegion.textContent = ' ';
  }, 1000);
}
