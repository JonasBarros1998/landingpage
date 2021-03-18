import React from 'react';
import Image from 'next/image';
import Grid from '@material-ui/core/Grid';
import { Title, Describe } from './styled/aboutStyled';
import { Margin } from '../global/Spacing';

function About() {
  return (
    <>
      <Grid container
        justify="center"
        alignItems="center">
        <Grid item xs={8}>
          <Title>
            <h4>Veja mais benefícios</h4>
          </Title>
          <Describe>
            Deixe que o chatbot responda as dúvidas, mais comuns entre seus clientes,
            por exemplo, informações sobre um determinado produto, horário de funcionamento,
            pagamentos, entrega de mercadoria, etc...
            Você poderá integrar com diversos sistemas por exemplo crm, erp,
            sistema de gerenciamento de estoque, ou de envio de mercadorias.
            Elimine o problema de espera durante o atendimento do seu cliente,
            porque o chatbot poderá atender várias pessoas ao mesmo tempo.
          </Describe>
        </Grid>
      </Grid>

      <Grid container
        justify="center"
        alignItems="center">
        <Grid item xs={11} sm={8} md={5} lg={4} xl={4}>
          <Title>
            <h4>Veja esses 3 incríveis casos de uso</h4>
          </Title>
        </Grid>
      </Grid>

      <Grid container
        direction="row"
        justify="center"
        alignItems="center">
        <Grid item
          xs={11}
          sm={7}
          md={3}
          lg={3}
          xl={3}>
          <Margin margin={"1em 0.5em 0 0"}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center">
              <Grid item xs={3}>
                <Image
                  src="/agente-de-call-center.png"
                  alt="image"
                  width={50}
                  height={50} />
              </Grid>
              <Grid item xs={9}>
                Poderá treina-lo para que esclareça as
                dúvidas de seus clientes, por exemplo,
                prazo de entrega de alguma mercadoria.
              </Grid>
            </Grid>
          </Margin>
        </Grid>

        <Grid item
          xs={11}
          sm={7}
          md={3}
          lg={3}
          xl={3}>
          <Margin margin={"1em 0.5em 0 0"}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center">
              <Grid item xs={3}>
                <Image
                  src="/finance.png"
                  alt="image"
                  width={50}
                  height={50} />
              </Grid>
              <Grid item xs={9}>
                Deixe que o chatbot responda seus cliente,
                e os outros colaboradores faça aquilo que é
                realmente importante para a empresa.
            </Grid>
            </Grid>
          </Margin>
        </Grid>

        <Grid item
          xs={11}
          sm={7}
          md={3}
          lg={3}
          xl={3}>
          <Margin margin={"1em 0 0 0"}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center">
              <Grid item xs={3}>
                <Image
                  src="/digital-marketing.png"
                  alt="image"
                  width={50}
                  height={50} />
              </Grid>
              <Grid item xs={9}>
                Poderá se comunicar com os seus clientes,
                e gerar insights sobre aqueles clientes com maiores
                possibilidades de comprar algum produto.
            </Grid>
            </Grid>
          </Margin>
        </Grid>
      </Grid>
    </>
  )
}

export default About;