import { SocialList } from '../components/SocialList';

export default function Footer() {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  return (
    <footer className="footer has-background-success">
      <span className="level container content has-text-centered has-text-white">
        <span className="level-item has-text-white">
          &copy; {year} myles.im
        </span>
        <span className="level-item">
          <SocialList style={'light'} />{' '}
        </span>
      </span>
    </footer>
  );
}
