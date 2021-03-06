import GlobalStyle from '../components/GlobalStyle';
import Banner from '../components/banner/Banner';
import MainMenu from '../components/main-menu/MainMenu'

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <MainMenu />
      <Banner />
      <h2>Olá</h2>
    </>
  )
};
