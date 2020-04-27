import { FC } from 'react';
import Link from 'next/link';

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer>
      <article className='footer_content'>
        <p>
          <Link href='/submit'>
            <a>Don't see your favorite local businesses? submit them here</a>
          </Link>
        </p>
        <p className='footer_content-tiny'>
          Developed with 💖 by{' '}
          <a href='https://twitter.com/mykalmachon'>Mykal</a>
        </p>
      </article>
    </footer>
  );
};

interface FooterProps {}

export default Footer;
