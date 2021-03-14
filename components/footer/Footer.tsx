import { Grid, Typography, Button } from "@material-ui/core";
import { BackgroundColor } from '../global/Backgrounds';
import { Padding } from '../global/Spacing';

const rgbaFooter = `rgba(236, 236, 236, 0.48)`

function Footer() {
  return (
    <Grid container
      direction="row"
      justify="center"
      alignItems="center">

      <Grid item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}>
        <BackgroundColor color={rgbaFooter}>
          <Padding padding="1.2em">

            <Typography
              variant="subtitle2"
              align="center">
              Desenvolvido por ia developer | whatsapp: (11) 96358-2924
            </Typography>

            <Typography
              variant="subtitle2"
              align="center">
              icones, svg's:
            <Button
                component="a"
                href="https://www.flaticon.com/"
                variant="text"
                size="small"
                disableElevation={true}
                disableFocusRipple={true}
                color="primary">flaticon</Button>
            </Typography>

          </Padding>
        </BackgroundColor>
      </Grid>
    </Grid>
  )
}

export default Footer;