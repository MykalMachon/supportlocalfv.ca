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

    setSubmitState('SUBMITTING');\
    try{
      const submission = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formState),
      });
      setSubmitState('SUBMITTED');
    }catch(err){
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
