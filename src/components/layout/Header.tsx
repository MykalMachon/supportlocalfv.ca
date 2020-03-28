import Link from 'next/link';

const Header = () => {
  return (
    <article className="intro_container">
      <div className="intro_box">
        <h2>Lets Support Local in The Fraser Valley</h2>
        <p>
          With local businesses, shops, restaurants, and cafes around the Fraser
          Valley temporarily shut down due to COVID-19, many folks are
          struggling. This site is meant to be a resource for residents of the
          Fraser Valley to find local businesses and support them however they
          can.
        </p>
        <p>
          This information is crowd-sourced, so please verify the accuracy
          independently. If you see a mistake, please{' '}
          <Link href="/contact">
            <a>contact us</a>
          </Link>
          .
        </p>
      </div>
    </article>
  );
};

export default Header;
