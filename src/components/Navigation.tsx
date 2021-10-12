import Link from 'next/link';
import { useState } from 'react';
import classNames from 'classnames';

export default function Navigation() {
  const [active, setActive] = useState(false);
  const burgerClasses = classNames({
    'navbar-burger': true,
    'is-active': active,
  });
  const navClasses = classNames({
    'navbar-menu': true,
    'is-active': active,
  });

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            onClick={() => setActive(!active)}
            className={burgerClasses}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={navClasses}>
          <div className="navbar-start">
            <Link href="/">
              <a className="navbar-item">Home</a>
            </Link>
            <Link href="/">
              <a className="navbar-item">Documentation</a>
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link href="/">
                <a className="navbar-link">More</a>
              </Link>
              <div className="navbar-dropdown">
                <Link href="/">
                  <a className="navbar-item">home</a>
                </Link>
                <Link href="/">
                  <a className="navbar-item">about</a>
                </Link>
                <Link href="/posts">
                  <a className="navbar-item">blog</a>
                </Link>
                <hr className="navbar-divider" />
                <Link href="/">
                  <a className="navbar-item">Contact</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
