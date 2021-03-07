import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Title, SubTitle } from './styled/aboutStyled';

function About() {
  return (
    <Grid container
      justify="center"
      alignItems="center">
      <Grid item xs={8}>
        <Title>
          <h4>Lorem ipsum dolor sit amet</h4>
        </Title>
        <SubTitle>
          lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,
        </SubTitle>

        <Grid container
          direction="row"
          justify="flex-start"
          alignItems="center">
          <Grid item xs={4}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center">
              <Grid item xs={4}></Grid>
              <Grid item xs={8}></Grid>
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center">
              <Grid item xs={4}></Grid>
              <Grid item xs={8}></Grid>
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center">
              <Grid item xs={4}></Grid>
              <Grid item xs={8}></Grid>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  )
}

export default About;