import Layout from '../src/components/layout/Layout';
import { FiMail } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const ContactUs = (props) => {
  const [formState, setFormState] = useState({
    email: '',
    formContent: '',
  });
  const [submitState, setSubmitState] = useState('INVALID');

  const submitForm = async (e) => {
    e.preventDefault();

    setSubmitState('SUBMITTING');
    const submission = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formState),
    });
    setSubmitState('SUBMITTED');
  };

  useEffect(() => {
    if (formState.email === '' || formState.formContent === '') {
      setSubmitState('INVALID');
    } else {
      setSubmitState('VALID');
    }
  }, [formState]);

  return (
    <Layout title="Contact Us">
      <h2>Reach Out To Us!</h2>
      <section className="container_small">
        <p>
          All the information on this site is crowd funded by the community and
          therefore is not guaranteed to be 100% up-to-date or accurate.
        </p>
        <p>
          If you find an error, would like to add a business, have an idea on
          how we can better support local, or would just like to say hi, please
          reach out below!
        </p>
        <form action=":javascript" onSubmit={submitForm}>
          <label htmlFor="email">E-mail</label>
          <div className="input-icon">
            <FiMail />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@gmail.com"
              onChange={(e) => {
                setFormState({ ...formState, email: e.target.value });
              }}
            />
          </div>
          <label htmlFor="formContent">What would you like to say?</label>
          <textarea
            className="input"
            id="formContent"
            onChange={(e) => {
              setFormState({ ...formState, formContent: e.target.value });
            }}
          />
          <input
            type="submit"
            className={submitState === 'SUBMITTED' ? 'submitted' : ''}
            value={
              submitState === 'INVALID'
                ? 'Fill out the form'
                : submitState === 'VALID'
                ? 'Send us an email'
                : 'Thanks for reaching out! 😊'
            }
            disabled={
              submitState === 'INVALID' || submitState.includes('SUBMIT')
            }
          ></input>
        </form>
      </section>
    </Layout>
  );
};

export default ContactUs;
