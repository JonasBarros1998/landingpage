import React from 'react';
import { BannerStyled, SubTitle, Title, ColorButton } from './styled/BannerStyled';
import Grid from '@material-ui/core/Grid'

function Banner() {
  return (
    <Grid container>
      <Grid item xs={12}>

        <BannerStyled>
          <Grid container justify="center">
            <Grid item xs={8}>
              <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
              <SubTitle>Lorem ipsum dolor sit amet</SubTitle>
              <ColorButton variant="extended" color="primary">Solicite Agora</ColorButton>
            </Grid>
          </Grid>
        </BannerStyled>

      </Grid>
    </Grid>
  )
}

export default Banner;