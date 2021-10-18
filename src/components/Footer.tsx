import { SocialList } from '../components/SocialList';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <a className="title is-4" href="#">
                  Bulma Footer #1
                </a>
              </div>
            </div>
            <div className="level-right">
              <a className="level-item" href="#">
                Features
              </a>
              <a className="level-item" href="#">
                Enterprise
              </a>
              <a className="level-item" href="#">
                Support
              </a>
              <a className="level-item" href="#">
                ICO
              </a>
            </div>
          </div>
          <hr />
          <div className="columns">
            <div className="column">
              <div className="buttons">
                <a className="button" href="#">
                  <img src="placeholder/icons/twitter.svg" alt="" />
                </a>
                <a className="button" href="#">
                  <img src="placeholder/icons/facebook-f.svg" alt="" />
                </a>
                <a className="button" href="#">
                  <img src="placeholder/icons/instagram.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="column has-text-centered has-text-right-tablet">
              <p className="subtitle is-6">© 2019 - MIT License</p>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer has-background-primary">
        <div className="content has-text-centered has-text-white">
          <h1>W3hubs</h1>
          <div className="columns">
            <div className="column">
              <h6>About Us</h6>
              <p className="has-text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="column">
              <h6>Important</h6>
              <ul>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
              </ul>
            </div>
            <div className="column">
              <h6>Important</h6>
              <SocialList />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
