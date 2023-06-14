import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import '@/styles/global.css';
import { useRouter } from 'next/router';

import { Inter /** Inter */ /** Raleway */ } from 'next/font/google';

const font = Inter({
  subsets: ['latin'],
  weight: ['200', '400', '500', '600', '700', '800'],
});

// log the pageview with their URL
export const pageview = (url: string) => {
  if (typeof window !== 'undefined') {
    (window as any).gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    });
  }
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className={font.className}>
      <Component {...pageProps} />
    </div>
  );
}
