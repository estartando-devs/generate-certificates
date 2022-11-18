import NextNProgress from 'nextjs-progressbar';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from '../styles';
import { Layout } from '../components/modules';

const App = ({ Component, pageProps }: AppProps) => (
  // @ts-ignore
  <ThemeProvider theme={theme}>
    {/* @ts-ignore */}
    <GlobalStyles />
    <NextNProgress
      color="#81CAA8"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
    />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default App;
