import { SocialList } from '../components/SocialList';

export default function Footer() {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  return (
    <footer className="footer has-background-success">
      <div className="container content has-text-centered has-text-white">
        <div className="level">
          <a className="level-item has-text-white" href="#">
            &copy; {year} myles.im
          </a>{' '}
          <SocialList style={'light'} />
        </div>
      </div>
    </footer>
  );
}
