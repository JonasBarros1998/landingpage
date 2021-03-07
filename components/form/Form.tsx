import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Box from '@material-ui/core/Box';

import MaskedInput from 'react-text-mask';

import { BoxFormulario } from './styled/form';

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

function TextMaskCustom(props: TextMaskCustomProps) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

function Form() {
  const [values, setValues] = useState<State>({
    textmask: '( )     -    ',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Grid container
      direction="row"
      justify="center"
      alignItems="center">
      <Grid item xs={12} sm={12} md={12} lg={8} xl={12}>
        <BoxFormulario>
          <Typography variant="h5">Solicite agora um chatbot ao seu site</Typography>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item xs={12} sm={12} md={12} lg={8} xl={12}>
              <Box mt={4}>
                <FormControl fullWidth>
                  <InputLabel>Nome completo</InputLabel>
                  <Input
                    id="full-name"
                    type="text"
                    name="fullName"
                    fullWidth
                    required />
                </FormControl>
              </Box>

              <Box mt={4}>
                <FormControl fullWidth>
                  <InputLabel>e-mail</InputLabel>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    required />
                </FormControl>
              </Box>

              <Box mt={4}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="phone-number">telefone/whatsapp</InputLabel>
                  <Input
                    id="phone-number"
                    value={values.textmask}
                    onChange={handleChange}
                    name="textmask"
                    inputComponent={TextMaskCustom as any}
                    required />
                </FormControl>
              </Box>

              <Box mt={4}>
                <FormControl fullWidth>
                  <TextareaAutosize
                    placeholder="Descreva qual é o principal objetivo do chatbot"
                    aria-label="Descreva qual é o principal objetivo do chatbot"
                    rowsMax={12}
                    rowsMin={3}
                    required />
                </FormControl>
              </Box>

            </Grid>
          </Grid>
        </BoxFormulario>
      </Grid>
    </Grid>
  )
}

export default Form;