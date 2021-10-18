import { SocialList } from '../components/SocialList';

export default function Footer() {
  return (
    <footer className="footer has-background-primary">
      <div className="container content has-text-centered has-text">
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
          </div>
          <div className="column">
            <SocialList />
          </div>
        </div>
      </div>
    </footer>
  );
}
