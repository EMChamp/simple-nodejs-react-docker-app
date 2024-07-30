// _app.tsx
import '../styles/styles.css'; // Adjust path according to your structure

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
