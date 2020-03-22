import { GetStaticProps } from 'next';

import fetch from 'isomorphic-unfetch';
import { generateFetchSettings } from '../src/util';
import Layout from '../src/components/layout/Layout';
import BusinessCard from '../src/components/BusinessCard';
import BusinessCardList from '../src/components/BusinessCardList';

const HomePage = ({ data: { businesses } }) => {
  return (
    <Layout title="Home">
      <section className="container">
        <h2>This is my home page</h2>
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
