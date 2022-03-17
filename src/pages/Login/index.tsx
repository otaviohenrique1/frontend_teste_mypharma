import { Container, Grid } from "@mui/material";
import { Formik, Form, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { BotoesFormulario } from "../../components/BotoesFormulario";
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
                  <BotoesFormulario
                    botao_cadastrar_label="Entrar"
                    botao_limpar_label="Limpar"
                    botao_link_label="Novo usuario"
                    to="/usuarios/cadastro"
                  />
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
}
