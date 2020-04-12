import { FC } from 'react';
import Head from 'next/head';

const SEO: FC<SEOProps> = ({ title }) => {
  return (
    <Head>
      <title>SLFV | {title}</title>
      <meta
        name='viewport'
        content='initial-scale=1.0, width=device-width'
        key='viewport'
      />
      <meta
        name='description'
        content='Support Local Fraser Valley is a community driven directory of local businesses. Our main goal is to highlight exemplary local businesses who may need support due to the COVID-19 Pandemic.'
      />
    </Head>
  );
};

interface SEOProps {
  title: string;
}

export default SEO;
