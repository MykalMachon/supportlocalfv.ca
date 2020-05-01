import { FC } from 'react';
import Link from 'next/link';

const Nav: FC<NavProps> = ({}) => {
  return (
    <nav>
      <div className='nav_container'>
        <div className='nav_left'>
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='nav_logo'>
          <img
            src='https://res.cloudinary.com/drwst2p1d/image/upload/v1588113783/Support%20Local%20Fraser%20Valley/Logos/PNG/Logo/Logo_Dark.png'
            alt='Support Local: Fraser Valley logo. A picture of a crow carrying a delivery bag'
            loading='lazy'
          />
        </div>
        <div className='nav_right'>
          <ul>
            <li>
              <Link href='/submit'>
                <a>Submit</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

interface NavProps {}

export default Nav;
