import GlobalStyle from '../components/GlobalStyle';
import Banner from '../components/banner/Banner';
import MainMenu from '../components/main-menu/MainMenu'
import About from '../components/about/About';
import Form from '../components/form/Form';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <MainMenu />
      <Banner />
      <About />
      <Form />
    </>
  )
};

