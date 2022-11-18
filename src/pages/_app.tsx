import NextNProgress from 'nextjs-progressbar';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import { GlobalStyles, theme } from '../styles';
import { Layout } from '../components/modules';

const App = ({ Component, pageProps }: AppProps) => (
  // @ts-ignore
  <ThemeProvider theme={theme}>
    {/* @ts-ignore */}
    <GlobalStyles />
    <DefaultSeo {...SEO} />
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
