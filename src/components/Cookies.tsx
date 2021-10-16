type Props = {};
export default function Cookies({}: Props) {
  return (
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
        >
          <span>👍</span> Got it!
        </a>
      </div>
    </div>
  );
}
