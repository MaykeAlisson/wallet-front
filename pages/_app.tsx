import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import { AppProvider } from '../src/contexts/AppContext';
import { LoadingProvider } from '../src/contexts/LoadingContext';
import Loading from '../src/components/Loading';
import { MessageProvider } from '../src/contexts/MessageContext';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Wallet</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LoadingProvider>
          <Loading>
            <MessageProvider>
              <AppProvider>
                <Component {...pageProps} />
              </AppProvider>
            </MessageProvider>
          </Loading>
        </LoadingProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
