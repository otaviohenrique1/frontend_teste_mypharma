import { Button, ButtonGroup, Container, Grid } from "@mui/material";
import { Formik, Form, FormikHelpers } from "formik";
import { Link as BotaoLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { CampoFormulario } from "../../components/Campos";

export const initialValues: LoginTypes = {
  email: "",
  senha: ""
};

export const validationSchema = Yup.object().shape({
  email: Yup.string().required('Campo email vazio'),
  senha: Yup.string().required('Campo senha vazio'),
});

export function Login() {
  const navigate = useNavigate();

  async function onSubmit(values: LoginTypes, helpers: FormikHelpers<LoginTypes>) {
    navigate('/home-page');
    helpers.resetForm();
  }

  return (
    <Container maxWidth="sm">
      <Grid md={12} xs={12} container rowSpacing={2}>
        <Grid md={12} xs={12} item>
          <h1>Cadastro de Marcas</h1>
        </Grid>
        <Grid md={12} xs={12} item>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values }) => (
              <Form>
                <Grid md={12} xs={12} container rowSpacing={2}>
                  <CampoFormulario
                    id="email"
                    label="E-mail"
                    name="email"
                    type="text"
                    placeholder="Digite o seu email"
                    values={values.email}
                  />
                  <CampoFormulario
                    id="senha"
                    label="Senha"
                    name="senha"
                    type="password"
                    placeholder="Digite a sua senha"
                    values={values.senha}
                  />
                  <Grid md={12} xs={12} item display="flex" justifyContent="end">
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                    >
                      <Button type="submit">Entrar</Button>
                      <Button type="reset">Limpar</Button>
                      <Button type="button">
                        <BotaoLink
                          to="/usuario/cadastro"
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
