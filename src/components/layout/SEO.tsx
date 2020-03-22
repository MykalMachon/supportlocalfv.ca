import { FC } from 'react';
import Head from 'next/head';

const SEO: FC<SEOProps> = ({ title }) => {
  return (
    <Head>
      <title>SLFV | {title}</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>
  );
};

interface SEOProps {
  title: string;
}

export default SEO;
