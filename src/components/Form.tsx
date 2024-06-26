import { useState } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import Notification from './Notification';

type Props = {};
export default function Form({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const RequiredELm = ({ prop }) => (
    <p className="help is-danger">Please enter a valid {prop}</p>
  );
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const nameClasses = classNames({
    input: true,
    'is-danger': errors.name,
  });
  const emailClasses = classNames({
    input: true,
    'is-danger': errors.email,
  });
  const textClasses = classNames({
    textarea: true,
    'is-danger': errors.text,
  });
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };
  const clearShow = () => {
    setTimeout(() => {
      setError(false);
      setShow(false);
    }, 5000);
  };
  const onSubmit = (data, e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...data,
      }),
    })
      .then((response) => {
        console.log(response);
        setShow(true);
        reset();
        clearShow();
      })
      .catch((error) => {
        setError(true);
        setShow(true);
        console.log(error);
        clearShow();
      });
  };
  return (
    <div className="box">
      <Notification show={show} error={error} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        name="contact"
        action="/"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="field">
          <label className="label">Name</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className={nameClasses}
              type="text"
              placeholder=""
              {...register('name', { required: true })}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
          </div>
        </div>
        {errors.name && <RequiredELm prop={'name'} />}

        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className={emailClasses}
              {...register('email', { required: true })}
              type="email"
              placeholder=""
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
        </div>
        {errors.email && <RequiredELm prop={'email address'} />}

        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">Phone</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  {...register('tel', { required: false })}
                  type="tel"
                  placeholder=""
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-mobile"></i>{' '}
                </span>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">Subject</label>
              <div className="control">
                <div className="select">
                  <select {...register('subject', { required: false })}>
                    <option>General enquiry</option>
                    <option>Website bug report</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              className={textClasses}
              {...register('text', { required: true })}
              placeholder=""
            ></textarea>
          </div>
          {errors.text && <RequiredELm prop={'message'} />}
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link is-info">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
