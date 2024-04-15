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
          <Link href="/" className="navbar-item">
            <img src={'/images/logo-light.png'} />
          </Link>
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
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <Link href="/" className="navbar-item">
              Home
            </Link>
            <Link href="/work" className="navbar-item">
              Work
            </Link>
            <Link href="/posts" className="navbar-item">
              Posts
            </Link>
            <Link href="/contact" className="navbar-item">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
