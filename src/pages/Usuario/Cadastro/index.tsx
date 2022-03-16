import { Button, ButtonGroup, Container, Grid } from "@mui/material";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { Link as BotaoLink } from "react-router-dom";
import * as Yup from "yup";
import { TextField } from "formik-mui";

export const initialValues: UsuarioTypes = {
  nome: "",
  email: "",
  senha: "",
};

export const validationSchema = Yup.object().shape({
  nome: Yup.string().required('Campo vazio'),
  email: Yup.string().required('Campo vazio'),
  senha: Yup.string().required('Campo vazio'),
});

export function CadastroUsuario() {
  async function onSubmit(values: UsuarioTypes, helpers: FormikHelpers<UsuarioTypes>) {
    helpers.resetForm();
  }

  return (
    <Container maxWidth="lg">
      <Grid md={12} xs={12} container rowSpacing={2}>
        <Grid md={12} xs={12} item>
          <h1>Cadastro de produtos</h1>
        </Grid>
        <Grid md={12} xs={12} item>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {({ errors, touched, values }) => (
              <Form>
                <Grid md={12} xs={12} container rowSpacing={2}>
                  <Grid md={12} xs={12} item>
                    <Field
                      style={{ width: '100%' }}
                      id="nome"
                      label="Nome"
                      name="nome"
                      type="text"
                      placeholder="Digite o seu nome"
                      value={values.nome}
                      component={TextField}
                    />
                  </Grid>
                  <Grid md={12} xs={12} item>
                    <Field
                      style={{ width: '100%' }}
                      id="email"
                      label="E-mail"
                      name="email"
                      type="email"
                      placeholder="Digite o seu e-mail"
                      value={`${values.email}`}
                      component={TextField}
                    />
                  </Grid>
                  <Grid md={12} xs={12} item>
                    <Field
                      style={{ width: '100%' }}
                      id="senha"
                      label="Senha"
                      name="senha"
                      type="password"
                      placeholder="Digite a sua senha"
                      value={values.senha}
                      component={TextField}
                    />
                  </Grid>
                  <Grid md={12} xs={12} item display="flex" justifyContent="end">
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                    >
                      <Button type="submit">Salvar</Button>
                      <Button type="reset">Limpar</Button>
                      <Button type="button">
                        <BotaoLink
                          to="/"
                          style={{ textDecoration: 'none', color: 'white' }}
                        >Voltar</BotaoLink>
                      </Button>
                    </ButtonGroup>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
}
