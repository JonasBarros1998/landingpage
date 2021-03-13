import React from 'react';
import { BannerStyled, SubTitle, Title, ColorButton, Content, Description } from './styled/BannerStyled';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

function Banner() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <BannerStyled>
          <Grid container justify="center">
            <Grid item xs={10}>
              <Content>
                <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
                <SubTitle>Lorem ipsum dolor sit</SubTitle>
                <Description>Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. Mauris molestie 
                  tincidunt elit, ut elementum dolor laoreet iaculis. 
                  Suspendisse finibus congue massa tempor consequat</Description>
                <Button variant="outlined" color="primary">Solicite Agora</Button>
              </Content>
            </Grid>
          </Grid>
        </BannerStyled>
      </Grid>
    </Grid>
  )
}

export default Banner;