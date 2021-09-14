import { Fragment } from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <Fragment>
      Icons made by{' '}
      <a
        className="footer__link"
        href="https://www.flaticon.com/authors/DinosoftLabs"
        title="DinosoftLabs"
        target="_blank"
        rel="noreferrer"
      >
        DinosoftLabs
      </a>{' '}
      from{' '}
      <a
        className="footer__link"
        href="https://www.flaticon.com/"
        title="Flaticon"
        target="_blank"
        rel="noreferrer"
      >
        flaticon.com
      </a>
    </Fragment>
  );
}
