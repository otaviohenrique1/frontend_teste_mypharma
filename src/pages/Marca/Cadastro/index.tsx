import { Button, ButtonGroup, Container, Grid } from "@mui/material";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { Link as BotaoLink } from "react-router-dom";
import * as Yup from "yup";
import { TextField } from "formik-mui";

export const initialValues: MarcaTypes = {
  nome: ""
};

export const validationSchema = Yup.object().shape({
  nome: Yup.string().required('Campo vazio'),
});

export function CadastroMarca() {
  async function onSubmit(values: MarcaTypes, helpers: FormikHelpers<MarcaTypes>) {
    helpers.resetForm();
  }

  return (
    <Container maxWidth="lg">
      <Grid md={12} xs={12} container rowSpacing={2}>
        <Grid md={12} xs={12} item>
          <h1>Cadastro de marcas</h1>
        </Grid>
        <Grid md={12} xs={12} item>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {({ values }) => (
              <Form>
                <Grid md={12} xs={12} container rowSpacing={2}>
                  <Grid md={12} xs={12} item>
                    <Field
                      style={{ width: '100%' }}
                      id="nome"
                      label="Nome"
                      name="nome"
                      type="text"
                      placeholder="Digite o nome da marca"
                      value={values.nome}
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
                          to="/home-page"
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
