import classNames from 'classnames';

type Props = {
  show: boolean;
  error: boolean;
};
export default function Notification({ show, error }: Props) {
  const notificationClasses = classNames({
    notification: true,
    'is-light': true,
    'is-danger': error,
    'is-success': !error,
  });
  return (
    show && (
      <div className={notificationClasses}>
        Message sent! Thanks for getting in touch.
      </div>
    )
  );
}
