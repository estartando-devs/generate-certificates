import NextNProgress from 'nextjs-progressbar';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import { GlobalStyles, theme } from '../styles';
import { Layout } from '../components/modules';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const App = ({ Component, pageProps }: AppProps) =>{ 
  useEffect(() => {
    const end = Date.now() + (15 * 100);
    const colors = ['#bb0000', '#ffffff'];
    
    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });
    
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }, []); 

  return (
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
)};

export default App;
