import { GetStaticProps } from 'next';

import fetch from 'isomorphic-unfetch';
import { generateFetchSettings } from '../src/util';
import Layout from '../src/components/layout/Layout';
import BusinessCardList from '../src/components/business/BusinessCardList';
import Link from 'next/link';

const HomePage = ({ data: { businesses } }) => {
  return (
    <Layout title="Home">
      <section className="container">
        <article className="intro_container">
          <div className="intro_box">
            <h2>Lets Support Local in The Fraser Valley</h2>
            <p>
              With local businesses, shops, restaurants, and cafes around the
              Fraser Valley temporarily shut down due to COVID-19, many folks
              are struggling. This site is meant to be a resource for residents
              of the Fraser Valley to find local businesses and support them
              however they can.
            </p>
            <p>
              This information is crowd-sourced, so please verify the accuracy
              independently. If you see a mistake, please{' '}
              <Link href="/contactUs">
                <a>contact us</a>
              </Link>
              .
            </p>
          </div>
        </article>
        <BusinessCardList bizlist={businesses} />
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    'https://v2-api.sheety.co/mykal/supportlocalfv/businesses',
    { ...generateFetchSettings(process.env.SLFV_TOKEN) }
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default HomePage;
