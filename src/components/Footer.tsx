import { SocialList } from '../components/SocialList';

export default function Footer() {
  return (
    <footer className="footer has-background-success">
      <div className="container content has-text-centered has-text-white">
        <div className="columns">
          <div className="column">
            <h6 className="has-text-white">About Us</h6>
            <p className="has-text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="column">
            <h6 className="has-text-white">About Us</h6>
            <div className="level">
              <a className="level-item has-text-white" href="#">
                Features
              </a>
              <a className="level-item has-text-white" href="#">
                Enterprise
              </a>
              <a className="level-item has-text-white" href="#">
                Support
              </a>
              <a className="level-item has-text-white" href="#">
                ICO
              </a>
            </div>
          </div>
          <div className="column">
            <h6 className="has-text-white">About Us</h6>
            <SocialList />
          </div>
        </div>
      </div>
    </footer>
  );
}
