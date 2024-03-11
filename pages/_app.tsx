// Importa NextPage y AppProps desde 'next/app'
import type { AppProps /*, AppContext */ } from 'next/app';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Utiliza AppProps para tipar las propiedades de tu componente MyApp
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
