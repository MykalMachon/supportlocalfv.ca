import { FC } from 'react';
import Link from 'next/link';

const Nav: FC<NavProps> = ({}) => {
  return (
    <nav>
      <div className="nav_container">
        <div className="nav_left">
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav_logo">
          <h2>
            <span className="nav_logo-subtitle">Support Local</span>
            <span className="nav_logo-title">Fraser Valley</span>
          </h2>
        </div>
        <div className="nav_right">
          <ul>
            <li>
              <Link href="/submit">
                <a>Submit</a>
              </Link>
            </li>
            <li>
              <Link href="/contactus">
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
