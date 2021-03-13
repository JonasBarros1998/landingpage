import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import { Padding } from '../global/Spacing';

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

  const [fullName, setFullName] = useState<State>(""); 

  const inputChanged = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = {...fullName};
    inputValue[event.target.name] = event.target.value;
    setFullName({
      ...fullName,
      [event.target.name]: event.target.value,
    });
  }

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(fullName)
  }

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
              <form onSubmit={submit}>
                <Padding padding={"20px 0 0 0"}>
                  <FormControl fullWidth>
                    <InputLabel>Nome completo</InputLabel>
                    <Input
                      id="full-name"
                      type="text"
                      name="fullName"
                      fullWidth
                      onChange={inputChanged}
                      required />
                  </FormControl>
                </Padding>

                <Padding padding={"20px 0 0 0"}>
                  <FormControl fullWidth>
                    <InputLabel>e-mail</InputLabel>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      onChange={inputChanged}
                      required />
                  </FormControl>
                </Padding>

                <Padding padding={"35px 0 0 0"}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="phone-number">telefone/whatsapp</InputLabel>
                    <Input
                      id="phone-number"
                      onChange={inputChanged}
                      name="phone"
                      inputComponent={TextMaskCustom as any}
                      required />
                  </FormControl>
                </Padding>

                <Padding padding={"40px 0 0 0"}>
                  <FormControl fullWidth>
                    <TextareaAutosize
                      name="describe"
                      placeholder="Descreva qual é o principal objetivo do chatbot"
                      aria-label="Descreva qual é o principal objetivo do chatbot"
                      rowsMax={20}
                      rowsMin={10}
                      onChange={inputChanged}
                      required />
                  </FormControl>
                </Padding>

                <Padding padding={"35px 0 0 0 "}>
                  <Button 
                  type="submit" 
                  fullWidth 
                  color="primary"
                  variant="contained">
                    Enviar</Button>
                </Padding>
              </form>
            </Grid>
          </Grid>
        </BoxFormulario>
      </Grid >
    </Grid >
  )
}

export default Form;