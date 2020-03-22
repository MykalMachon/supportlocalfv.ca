import { GetStaticProps } from 'next';

import fetch from 'isomorphic-unfetch';
import { generateFetchSettings } from '../src/util';
import Layout from '../src/components/layout/Layout';

const HomePage = ({ data: { businesses } }) => {
  return (
    <Layout title="Home">
      <h2>This is my home page</h2>
      <ul className="businesses">
        {businesses.map((biz) => {
          return <li key={biz.id}>{biz.businessName}</li>;
        })}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(process.env);
  console.log(process.env.SLFV_TOKEN);
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
