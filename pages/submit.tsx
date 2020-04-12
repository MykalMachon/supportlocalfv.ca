import Layout from '../src/components/layout/Layout';

const ContactUs = (props) => {
  console.log(props);
  return (
    <Layout title='Submit'>
      <h2>Submit your Local Listing</h2>
      <section className='container_small'>
        This page is still 🚧 under construction 🚧, please{' '}
        <a href='/contact'>send us an email</a> through the contact us page
        with:
        <ol>
          <li>The business's name & location</li>
          <li>brief explanation of how people can support them</li>
          <li>any links or other info you think might be useful</li>
        </ol>
      </section>
    </Layout>
  );
};

export default ContactUs;
