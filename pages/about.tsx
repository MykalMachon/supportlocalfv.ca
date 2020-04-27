import Layout from '../src/components/layout/Layout';
import Link from 'next/link';

const About = (props) => {
  console.log(props);
  return (
    <Layout title='Submit'>
      <h2>What is Support Local: Fraser Valley?</h2>
      <section className='container_small'>
        <p>
          Support Local Fraser Valley is a community driven directory of local
          businesses.{' '}
          <b>
            Our main goal is to highlight exemplary local businesses who may
            need support due to the COVID-19 Pandemic.
          </b>
        </p>

        <p>
          Support Local Fraser Valley was inspired by a project called{' '}
          <a href='https://okforok.com'>Oklahomans for Oklahoma</a>, which
          provided a similar service for Oklahoma's local business community.
        </p>
      </section>
      <h2>Questions & Answers</h2>
      <section className='container_small'>
        <p>
          <b>Q: Does it cost anything to be on the site?</b>
        </p>
        <p>
          A: No! we don't charge any fees for submitting your businesses (or
          your favorite business) to the site!
        </p>
        <p>
          <b>Q: How can I help out?</b>
        </p>
        <p>
          A: There are a number of ways you can contribute:
          <ol>
            <li>
              <b>Share with your friends</b>: the more people we get on the
              site, the more people who support local!
            </li>
            <li>
              <b>Submit your favorite local business</b>: we're always looking
              to showcase more businesses! submit their info{' '}
              <Link href='/submit'>
                <a>here</a>
              </Link>
            </li>
            <li>
              <b>Contribute design & dev time</b>: This project is 100% open
              source and community driven, if you're interested in submitting
              some design work or development time to improve the site,{' '}
              <a
                href='https://github.com/mykalmachon/supportlocalfv.ca'
                target='_blank'
              >
                checkout our GitHub
              </a>
            </li>
          </ol>
        </p>
      </section>
      <h2>Let's Get Specific</h2>
      <section className='container_small'>
        <p>
          Support Local Fraser Valley is aimed to help out businesses all across
          the Fraser Valley. However, there are a few other Fraser Valley
          natives working on solutions for their more immediate surroundings.{' '}
          <b>
            Community is core to our mission of supporting local business and we
            want to encourage you to use these other sites when applicable as
            well.
          </b>{' '}
          Check them out below
        </p>
        <ul>
          <li>
            <a href='https://abbyeatslocal.com/'>Abby Eats Local</a> showcases
            Abbotsford's local eateries and drink establishments
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default About;
