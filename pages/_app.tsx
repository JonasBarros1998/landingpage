import {AppProps} from 'next/app';
import '../statics/css/icon.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
