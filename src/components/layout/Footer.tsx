import { FC } from 'react';
import Link from 'next/link';

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer>
      <article className='footer_content'>
        <div className='footer_content-column'>
          <h4>On This Site</h4>
          <ul>
            <li>
              <Link href='/about'>
                <a>About SLFV</a>
              </Link>
            </li>
            <li>
              <Link href='/submit'>
                <a>Submit your business</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a>Contact us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='footer_content-column'>
          <h4>Related Resources</h4>
          <ul>
            <li>
              <a href='https://abbyeatslocal.com'>Abby Eats Local</a>
            </li>
            <li>
              <a href='https://okforok.com'>Okay for Oklahoma</a>
            </li>
            <li>
              <a href='https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html?&utm_campaign=gc-hc-sc-coronaviruspublicedu2021-2021-0001-9762248618&utm_medium=search&utm_source=google-ads-99837326356&utm_content=text-en-428935858540&utm_term=coronavirus'>
                COVID-19 in Canada
              </a>
            </li>
          </ul>
        </div>
        <div className='footer_content-column'>
          <h4>Contributors</h4>
          <ul>
            <li>
              <a href='https://twitter.com/mykalmachon'>Mykal Machon</a>
            </li>
            <li>
              <a href='https://www.instagram.com/taylorkrulicki/?hl=en'>
                Taylor Krulicki
              </a>
            </li>
            <li>
              <a href='https://github.com/MykalMachon/supportlocalfv.ca'>
                Project's GitHub
              </a>
            </li>
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
