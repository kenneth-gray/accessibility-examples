import { Component, ReactNode } from 'react';
import { TOP_OF_PAGE_ID } from '../../constants';

type Props = {
  title: string;
  children: ReactNode;
};

class Screen extends Component<Props> {
  componentDidMount() {
    screenUpdate(this.props.title);
  }

  componentDidUpdate() {
    screenUpdate(this.props.title);
  }

  render() {
    return this.props.children;
  }
}

export default Screen;

function screenUpdate(title: string) {
  const documentTitle = `${title} - Accessibility examples`;
  document.title = documentTitle;

  const topOfPage = document.getElementById(TOP_OF_PAGE_ID);
  if (!topOfPage) {
    const newTopOfPage = document.createElement('span');
    newTopOfPage.setAttribute('id', TOP_OF_PAGE_ID);
    newTopOfPage.setAttribute('class', 'visually-hidden');
    newTopOfPage.setAttribute('tabindex', '-1');

    const removeContent = () => {
      newTopOfPage.textContent = '';
    };
    newTopOfPage.addEventListener('blur', removeContent);
    newTopOfPage.addEventListener('keydown', removeContent);

    const body = document.querySelector('body') as HTMLElement;
    body.prepend(newTopOfPage);

    return;
  }

  if (document.activeElement === topOfPage) {
    topOfPage.textContent = documentTitle;
    topOfPage.focus();
  }
}
