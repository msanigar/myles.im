import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';
import Cookies from './Cookies';

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <div className="root container">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <meta name="theme-color" content="#fff" />
          <script
            defer
            data-domain="myles.im"
            src="https://plausible.io/js/plausible.js"
          ></script>
          <script
            src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <Navigation />
        <main>{children}</main>
        <Cookies />
        <Footer />
      </div>
    </>
  );
}
