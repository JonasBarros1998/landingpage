import styled from 'styled-components';
import {withStyles, Theme} from '@material-ui/core/styles'
import {cyan} from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
//import Button from '@material-ui/core/Button'

const ButtonForm = withStyles((theme: Theme) => ({
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
  height: auto;
  width: 100%;
  padding: 30px 0 90px 0;
`;

const SubTitle = styled.h4`
  color: white;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin: 20px 0 15px 0;
`;

const Title = styled.h1`
  color: white;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 68px;
  line-height: 85px;
  margin: 0 0 60px 0;
`;

const Description = styled.p`
  font-family: 'roboto';
  color: white;
  line-height: 24px;
  margin: 0 0 20px 0;
`;

const Content = styled.div`
  padding: 50px 0 0 20px;
`;

export {BannerStyled, SubTitle, Title, ButtonForm, Content, Description};