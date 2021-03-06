import React from 'react';
import ReactDom from 'react-dom';
import Fab from '@material-ui/core/Fab';
import {BannerStyled, SubTitle} from './styled/BannerStyled';

function Banner(){
  return (
    <BannerStyled>
      <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
      <SubTitle>Lorem ipsum dolor sit amet</SubTitle>
      <Fab size="small" variant="extended" color="primary">Loren Ipsum</Fab>
    </BannerStyled>
  )
}

export default Banner;