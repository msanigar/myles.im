import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';
import Cookies from './Cookies';
import { createCookie, checkCookie } from '../helpers/cookieUtils';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  let dismissed;
  if (typeof window !== 'undefined') {
    dismissed = checkCookie('cookiebanner_dismissed');
  }
  const [hidden, setHidden] = useState(false);
  const handleHideBanner = () => {
    if (typeof window !== 'undefined') {
      createCookie('cookiebanner_dismissed', 'true', 30);
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function() { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', 'G-DW5KV1MRHN');
      new Date();
    }
    setHidden(true);
  };

  return (
    <>
      <div className="root">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <meta name="theme-color" content="#fff" />
          <script
            src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
            crossOrigin="anonymous"
          ></script>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Navigation />
        <main>{children}</main>
        {dismissed !== 'true' && (
          <Cookies hidden={hidden} setHidden={handleHideBanner} />
        )}
        <Footer />
      </div>
      <script src="https://apps.elfsight.com/p/platform.js" async></script>
      
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-DW5KV1MRHN"></script>
    </>
  );
}