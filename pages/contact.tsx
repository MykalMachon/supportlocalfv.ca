import Layout from '../src/components/layout/Layout';
import { FiMail } from 'react-icons/fi';

const ContactUs = (props) => {
  console.log(props);
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
        <form action="/api/contact">
          <label htmlFor="email">E-mail</label>
          <div className="input-icon">
            <FiMail />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <label htmlFor="formContent">What would you like to say?</label>
          <textarea className="input" id="formContent" />
          <input type="submit" value="Send us an Email"></input>
        </form>
      </section>
    </Layout>
  );
};

export default ContactUs;
