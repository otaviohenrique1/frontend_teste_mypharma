import { Container, Grid } from "@mui/material";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { BotoesFormulario } from "../../../components/BotoesFormulario";
import { CampoFormulario } from "../../../components/Campos";

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
                  <CampoFormulario
                    id="nome"
                    label="Nome"
                    name="nome"
                    type="text"
                    placeholder="Digite o seu nome"
                    values={values.nome}
                  />
                  <CampoFormulario
                    id="email"
                    label="E-mail"
                    name="email"
                    type="email"
                    placeholder="Digite o seu e-mail"
                    values={`${values.email}`}
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
                    botao_cadastrar_label="Salvar"
                    botao_limpar_label="Limpar"
                    botao_link_label="Voltar"
                    to="/"
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
