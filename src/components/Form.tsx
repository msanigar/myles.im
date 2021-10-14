import { useForm } from 'react-hook-form';
import classNames from 'classnames';

type Props = {};
export default function Form({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const RequiredELm = ({ prop }) => (
    <p className="help is-danger">Please enter a valid {prop}</p>
  );
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
  return (
    <div className="box">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
        onSubmit={handleSubmit(onSubmit)}
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
                  {...register('tel', { required: true })}
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
                  <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
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
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>
          <div className="control" data-netlify-recaptcha="true"></div>
        </div>
      </form>
    </div>
  );
}
