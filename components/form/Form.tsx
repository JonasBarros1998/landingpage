import React, { useState, useEffect } from 'react';

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
import { eventClickAddClient } from './events/click/client';

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

  const [form, setForm] = useState<object | any>({
    name: "",
    email: "",
    phone: "",
    description: ""
  });

  const [disable, setDisabled] = useState<boolean | any>(false);

  useEffect(() => {
    setDisabled(false);
  }, []);

  const inputChanged = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = { ...form };
    inputValue[event.target.name] = event.target.value;
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    desabilitarBotao(true);
    const response = await eventClickAddClient(form);
    if (response.status === 201) {
      alert("em instantes entraremos em contato, Muito Obrigado!");
      limparFormulario();
      desabilitarBotao(false);
      return;
    }
    alert("Não foi possível concluir sua solicitação, por favor tente novamente mais tarde!");
    limparFormulario();
    desabilitarBotao(false);
  }

  function limparFormulario() {
    setForm({
      name: "",
      email: "",
      phone: `(${/\d/} ${/\d/})${/\d/}${/\d/}${/\d/}${/\d/}${/\d/}-${/\d/}${/\d/}${/\d/}`,
      description: ""
    });
  }

  function desabilitarBotao(status: boolean) {
    setDisabled(status)
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
            <Grid
              item
              xs={11}
              sm={10}
              md={8}
              lg={8}
              xl={8}>
              <form onSubmit={submit}>
                <Padding padding={"20px 0 0 0"}>
                  <FormControl fullWidth>
                    <InputLabel>Nome completo</InputLabel>
                    <Input
                      id="full-name"
                      type="text"
                      name="name"
                      fullWidth
                      onChange={inputChanged}
                      value={form.name}
                      />
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
                      value={form.email}
                      />
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
                      value={form.phone}
                      />
                  </FormControl>
                </Padding>

                <Padding padding={"40px 0 0 0"}>
                  <FormControl fullWidth>
                    <TextareaAutosize
                      name="description"
                      placeholder="Descreva qual é o principal objetivo do chatbot"
                      aria-label="Descreva qual é o principal objetivo do chatbot"
                      rowsMax={20}
                      rowsMin={10}
                      onChange={inputChanged}
                      value={form.description}
                      />
                  </FormControl>
                </Padding>


                <Padding padding={"35px 0 0 0 "}>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid
                      item
                      xs={8}
                      sm={8}
                      md={8}
                      lg={8}
                      xl={8}>
                      <Button
                        type="submit"
                        fullWidth
                        color="primary"
                        variant="contained"
                        disabled={disable}>
                        Enviar</Button>
                    </Grid>
                  </Grid>
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