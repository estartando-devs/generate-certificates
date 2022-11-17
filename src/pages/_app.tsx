import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from '../styles';
import { Layout } from '../components/modules';

const App = ({ Component, pageProps }: AppProps) => (
  // @ts-ignore
  <ThemeProvider theme={theme}>
  {/* @ts-ignore */}
    <GlobalStyles />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default App;
