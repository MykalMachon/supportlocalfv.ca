import { FC } from 'react';
import Link from 'next/link';

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer>
      <article className='footer_content'>
        <div className='footer_content-column'>
          <h4>On This Site</h4>
          <ul>
            <li>About SLFV</li>
            <li>Submit your business</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className='footer_content-column'>
          <h4>Related Resources</h4>
          <ul>
            <li>Abby Eats Local</li>
            <li>Okay for Oklahoma</li>
            <li>Stats Canada</li>
          </ul>
        </div>
        <div className='footer_content-column'>
          <h4>Contributions</h4>
          <ul>
            <li>Github</li>
          </ul>
        </div>
        <div className='footer_logo-column'>
          <img
            src='https://res.cloudinary.com/drwst2p1d/image/upload/v1588113783/Support%20Local%20Fraser%20Valley/Logos/PNG/Bird%20Only/Bird_Light.png'
            alt='Support Local Fraser Valley Logo: a crow with a delivery bag'
          />
        </div>
      </article>
    </footer>
  );
};

interface FooterProps {}

export default Footer;
