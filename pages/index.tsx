import GlobalStyle from '../components/GlobalStyle';
import Banner from '../components/banner/Banner';
import MainMenu from '../components/main-menu/MainMenu'
import About from '../components/about/About';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <MainMenu />
      <Banner />
      <About />
    </>
  )
};
