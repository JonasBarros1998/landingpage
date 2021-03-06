import styled from 'styled-components';
import {withStyles, Theme} from '@material-ui/core/styles'
import {cyan} from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(cyan[500]),
    backgroundColor: cyan[500],
    '&:hover': {
      backgroundColor: cyan[300],
    },
  },
}))(Fab);

const BannerStyled = styled.div`
  background-color: #37a0ff;
  background-size: cover;
  height: 100vh;
  width: 100%;
`;

const SubTitle = styled.h4`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;

const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 48px;
`;

export {BannerStyled, SubTitle, Title, ColorButton};