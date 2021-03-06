import {AppProps} from 'next/app';
import '../statics/css/icon.css';
import '../statics/css/fonts.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
