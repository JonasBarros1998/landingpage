import React from 'react';
import Image from 'next/image';
import Grid from '@material-ui/core/Grid';
import { Title, Describe } from './styled/aboutStyled';

function About() {
  return (
    <>
      <Grid container
        justify="center"
        alignItems="center">
        <Grid item xs={8}>
          <Title>
            <h4>Lorem ipsum dolor sit amet</h4>
          </Title>
          <Describe>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse ipsum velit, viverra in feugiat non,
            commodo et velit. Nunc porta feugiat eros eget tempor.
            Fusce sed arcu et turpis venenatis ornare. Curabitur
            sodales, dolor id eleifend condimentum, felis nulla dignissim
            augue, et luctus lacus leo et dui.
            Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Suspendisse ipsum velit, viverra in feugiat non, 
            commodo et velit. Nunc porta feugiat eros eget tempor. 
            Fusce sed arcu et turpis venenatis ornare. Curabitur sodales,
            dolor id eleifend condimentum, felis nulla dignissim augue,
            et luctus lacus leo et dui.
          </Describe>
        </Grid>
      </Grid>

      <Grid container
        justify="center"
        alignItems="center">
        <Grid item xs={11} sm={7} md={4} lg={3} xl={3}>
          <Title>
            <h4>Lorem ipsum dolor sit amet</h4>
          </Title>
        </Grid>
      </Grid>

      <Grid container
        direction="row"
        justify="center"
        alignItems="center">
        <Grid item xs={11} sm={7} md={3} lg={3} xl={3}>
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
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nunc consequat imperdiet
              pellentesque
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={11} sm={7} md={3} lg={3} xl={3}>
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
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nunc consequat imperdiet
              pellentesque
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={11} sm={7} md={3} lg={3} xl={3}>
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
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nunc consequat imperdiet
              pellentesque
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default About;