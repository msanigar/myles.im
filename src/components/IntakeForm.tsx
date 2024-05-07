import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import Notification from './Notification'; // Assuming Notification is suitable for displaying submission feedback

export default function IntakeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

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

  const RequiredELm = ({ prop }) => (
    <p className="help is-danger">Please enter a valid {prop}</p>
  );

  const onSubmit = (data, e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'intake',
        ...data,
      }),
    })
      .then((response) => {
        setShow(true);
        reset();
        clearShow();
      })
      .catch((error) => {
        console.error(error);
        setError(true);
        setShow(true);
        clearShow();
      });
  };

  return (
    <div className="box">
      <Notification show={show} error={error} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        name="intake"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="intake" />

        {/* Basic Personal and Business Information */}
        <div className="field">
          <label className="label">Full Name</label>
          <div className="control">
            <input
              className={classNames('input', { 'is-danger': errors.name })}
              type="text"
              {...register('name', { required: 'Full name is required' })}
            />
          </div>
          {errors.name && <RequiredELm prop={'name'} />}
        </div>

        <div className="field">
          <label className="label">Email Address</label>
          <div className="control">
            <input
              className={classNames('input', { 'is-danger': errors.email })}
              type="email"
              {...register('email', { required: 'Email is required' })}
            />
          </div>
          {errors.email && <RequiredELm prop={'email'} />}
        </div>

        <div className="field">
          <label className="label">Phone Number</label>
          <div className="control">
            <input className="input" type="tel" {...register('phone')} />
          </div>
        </div>

        <div className="field">
          <label className="label">Business Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              {...register('businessName')}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Business Industry or Sector</label>
          <div className="control">
            <input className="input" type="text" {...register('industry')} />
          </div>
        </div>

        <div className="field">
          <label className="label">Current Website URL (if applicable)</label>
          <div className="control">
            <input
              className="input"
              type="url"
              {...register('currentWebsite')}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Website Purpose</label>
          <div className="control">
            <select {...register('websitePurpose')}>
              <option value="informational">Informational</option>
              <option value="e-commerce">E-commerce</option>
              <option value="portfolio">Portfolio</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label className="label">
            What are the main goals of your website?
          </label>
          <div className="control">
            <label className="checkbox">
              <input
                type="checkbox"
                {...register('goals')}
                value="provideCompanyInfo"
              />{' '}
              Provide company information
            </label>
            <label className="checkbox">
              <input
                type="checkbox"
                {...register('goals')}
                value="generateLeads"
              />{' '}
              Generate leads
            </label>
            <label className="checkbox">
              <input
                type="checkbox"
                {...register('goals')}
                value="sellProducts"
              />{' '}
              Sell products/services
            </label>
            <label className="checkbox">
              <input
                type="checkbox"
                {...register('goals')}
                value="offerSupport"
              />{' '}
              Offer customer support
            </label>
          </div>
        </div>

        {/* Design Preferences */}
        <div className="field">
          <label className="label">
            Do you have specific design preferences? (Colors, style)
          </label>
          <div className="control">
            <textarea
              className={classNames('textarea', {
                'is-danger': errors.designPreferences,
              })}
              {...register('designPreferences')}
            ></textarea>
          </div>
        </div>

        {/* Content Requirements */}
        <div className="field">
          <label className="label">
            Will you provide the content for the website? (Text, images, videos)
          </label>
          <div className="control">
            <label className="radio">
              <input
                type="radio"
                {...register('contentProvided')}
                value="yes"
              />
              Yes
            </label>
            <label className="radio">
              <input type="radio" {...register('contentProvided')} value="no" />
              No
            </label>
          </div>
        </div>

        <div className="field">
          <label className="label">
            Do you have a company logo and branding guidelines?
          </label>
          <div className="control">
            <label className="radio">
              <input type="radio" {...register('hasLogo')} value="yes" />
              Yes
            </label>
            <label className="radio">
              <input type="radio" {...register('hasLogo')} value="no" />
              No
            </label>
          </div>
        </div>

        {/* Functional Requirements */}
        <div className="field">
          <label className="label">
            What features do you need on your website?
          </label>
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" {...register('features')} value="blog" />
              Blog
            </label>
            <label className="checkbox">
              <input
                type="checkbox"
                {...register('features')}
                value="shoppingCart"
              />
              Shopping cart
            </label>
            <label className="checkbox">
              <input
                type="checkbox"
                {...register('features')}
                value="searchFunctionality"
              />
              Search functionality
            </label>
            <label className="checkbox">
              <input
                type="checkbox"
                {...register('features')}
                value="membershipRegistration"
              />
              Membership/Registration
            </label>
            <label className="checkbox">
              <input
                type="checkbox"
                {...register('features')}
                value="bookingSystem"
              />
              Booking system
            </label>
            <label className="checkbox">
              <input
                type="checkbox"
                {...register('features')}
                value="socialMediaIntegration"
              />
              Social media integration
            </label>
          </div>
        </div>

        {/* Technical Considerations */}
        <div className="field">
          <label className="label">
            Do you need a domain name and hosting services?
          </label>
          <div className="control">
            <label className="radio">
              <input
                type="radio"
                {...register('needsHosting')}
                value="needBoth"
              />
              Yes, I need both
            </label>
            <label className="radio">
              <input
                type="radio"
                {...register('needsHosting')}
                value="haveDomain"
              />
              I already have a domain name
            </label>
            <label className="radio">
              <input
                type="radio"
                {...register('needsHosting')}
                value="haveHosting"
              />
              I already have hosting
            </label>
          </div>
        </div>

        <div className="field">
          <label className="label">
            How do you plan to manage your site after it's built?
          </label>
          <div className="control">
            <textarea
              className={classNames('textarea', {
                'is-danger': errors.siteManagement,
              })}
              {...register('siteManagement')}
            ></textarea>
          </div>
        </div>

        {/* Budget and Timeline */}
        <div className="field">
          <label className="label">What is your budget for this project?</label>
          <div className="control">
            <input className="input" type="text" {...register('budget')} />
          </div>
        </div>

        <div className="field">
          <label className="label">
            What is your desired timeline for launching the website?
          </label>
          <div className="control">
            <input className="input" type="date" {...register('timeline')} />
          </div>
        </div>

        <div className="field">
          <label className="label">Additional Notes</label>
          <div className="control">
            <textarea
              className={classNames('textarea', {
                'is-danger': errors.additionalNotes,
              })}
              {...register('additionalNotes')}
            ></textarea>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
