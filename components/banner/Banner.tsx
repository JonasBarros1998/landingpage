import React from 'react';
import { BannerStyled, SubTitle, Title, ButtonForm, Content, Description } from './styled/BannerStyled';
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
                <Title>O que um chatbot poderá ajudar seu empreendimento? </Title>
                <SubTitle>Qual plataforma utilizamos? </SubTitle>
                <Grid container>
                  <Grid item 
                    xs={11} 
                    sm={10} 
                    md={8} 
                    lg={8} 
                    xl={8}>
                    <Description>Utilizamos o dialogflow porque não foi desenvolvido utilizando uma
                      árvore de decisões, pelo contrário ele utiliza inteligência artificial
                      para interpretar o que o seu cliente escreve.
                      </Description>
                    <Button size="medium">Solicite Agora</Button>
                  </Grid>
                </Grid>
              </Content>
            </Grid>
          </Grid>
        </BannerStyled>
      </Grid>
    </Grid>
  )
}

export default Banner;