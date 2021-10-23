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
          <a className="navbar-item" href="/">
            <i className="far fa-hand-peace"></i>
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
            <Link href="/about">
              <a className="navbar-item">About</a>
            </Link>
            <Link href="/posts">
              <a className="navbar-item">Posts</a>
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link href="/contact">
                  <a className="button is-info">
                    <strong>
                      Contact <i className="fas fa-envelope"></i>
                    </strong>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
