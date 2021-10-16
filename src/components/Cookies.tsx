type Props = {
  setHidden: () => void;
  hidden: boolean;
};
export default function Cookies({ setHidden, hidden }: Props) {
  return !hidden ? (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="cupcakeconsent"
      aria-describedby="cupcakeconsent:desc"
      className="cpck-window cpck-banner cpck-type-info cpck-theme-block cpck-bottom "
    >
      <span id="cupcakeconsent:desc" className="cpck-message">
        Just so you know, this website uses cookies.{' '}
        <a
          aria-label="learn more about cookies"
          role="button"
          className="cpck-link"
          href="https://cookiesandyou.com"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          What are cookies?
        </a>
      </span>
      <div className="cpck-compliance">
        <a
          aria-label="dismiss cookie message"
          role="button"
          className="cpck-btn cpck-dismiss"
          onClick={setHidden}
        >
          <span>👍</span> Got it!
        </a>
      </div>
    </div>
  ) : null;
}
