import { FC } from 'react';

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer>
      <article className="footer_content">Made with 💖 by @Mykal</article>
    </footer>
  );
};

interface FooterProps {}

export default Footer;
