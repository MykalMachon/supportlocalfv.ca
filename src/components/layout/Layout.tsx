import { FC } from 'react';
import SEO from './SEO';
import Nav from './Nav';
import Footer from './Footer';
import '../../../styles/main.scss';

const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <main>
      <SEO title={title} />
      <Nav />
      <div className="main_content">{children}</div>
      <Footer />
    </main>
  );
};

interface LayoutProps {
  title: string;
}

export default Layout;
