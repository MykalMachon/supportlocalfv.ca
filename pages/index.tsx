import { GetStaticProps } from 'next';

import fetch from 'isomorphic-unfetch';
import { generateFetchSettings } from '../src/util';
import Layout from '../src/components/layout/Layout';
import Header from '../src/components/layout/Header';
import BusinessCardList from '../src/components/business/BusinessCardList';

const HomePage = ({ data: { businesses } }) => {
  return (
    <Layout title="Home">
      <section className="container">
        <Header />
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
