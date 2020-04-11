import Layout from '../src/components/layout/Layout';
import { FiMail } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const ContactUs = (props) => {
  // Declare form states
  const [formState, setFormState] = useState({
    email: '',
    formContent: '',
  });
  const [submitState, setSubmitState] = useState('INVALID');

  useEffect(() => {
    if (formState.email === '' || formState.formContent === '') {
      setSubmitState('INVALID');
    } else {
      setSubmitState('VALID');
    }
  }, [formState]);

  // This function is run upon form submission
  const submitForm = async (e) => {
    e.preventDefault();
    setSubmitState('SUBMITTING');
    try {
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formState),
      });
      setSubmitState('SUBMITTED');
    } catch (err) {
      console.error(err);
      setSubmitState('ERROR');
    }
  };

  // By using the submitState as a key on this object, you can access corresponding button values
  const submitStateValues = {
    INVALID: 'Please fill out the form',
    VALID: 'Send us an email!',
    SUBMITTING: 'Sending...',
    SUBMITTED: 'Email sent! Thank you 😊',
    ERROR: 'Failed to send email, try again later.',
  };
  return (
    <Layout title='Contact Us'>
      <h2>Reach Out To Us!</h2>
      <section className='container_small'>
        <p>
          Support Local Fraser Valley is 100% community driven, so we can't
          guarantee we got everything right...
        </p>
        <p>
          If you find a typo, think that some of our info is wrong, or just want
          to say hello, please send us an email below!
        </p>
        <form action=':javascript' onSubmit={submitForm}>
          <label htmlFor='email'>E-mail</label>
          <div className='input-icon'>
            <FiMail />
            <input
              type='email'
              name='email'
              id='email'
              placeholder='johndoe@gmail.com'
              onChange={(e) => {
                setFormState({ ...formState, email: e.target.value });
              }}
            />
          </div>
          <label htmlFor='formContent'>What would you like to say?</label>
          <textarea
            className='input'
            id='formContent'
            onChange={(e) => {
              setFormState({ ...formState, formContent: e.target.value });
            }}
          />
          <input
            type='submit'
            className={submitState === 'SUBMITTED' ? 'submitted' : ''}
            value={submitStateValues[submitState]}
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
