import { Button, ButtonGroup, Container, Grid } from "@mui/material";
import { Formik, Form, FormikHelpers } from "formik";
import { Link as BotaoLink } from "react-router-dom";
import * as Yup from "yup";
import { CampoFormulario } from "../../../components/Campos";

export const initialValues: ProdutoTypes = {
  nome: "",
  descricao: "",
  preco: 0,
  estoque: 0,
  categoria: "",
  marca: ""
};

export const validationSchema = Yup.object().shape({
  nome: Yup.string().required('Campo nome vazio'),
  descricao: Yup.string().required('Campo descrição vazio'),
  preco: Yup.number().moreThan(0, 'Campo preço vazio').required('Campo preço vazio'),
  estoque: Yup.number().moreThan(0, 'Campo preço vazio').required('Campo estoque vazio'),
  categoria: Yup.string().required('Campo categoria vazio'),
  marca: Yup.string().required('Campo marca vazio'),
});

export function CadastroProduto() {
  async function onSubmit(values: ProdutoTypes, helpers: FormikHelpers<ProdutoTypes>) {
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
            enableReinitialize
          >
            {({ values }) => (
              <Form>
                <Grid md={12} xs={12} container rowSpacing={2}>
                  <CampoFormulario
                    id="nome"
                    label="Nome"
                    name="nome"
                    type="text"
                    placeholder="Digite o nome"
                    values={values.nome}
                  />
                  <CampoFormulario
                    id="descricao"
                    label="Descrição"
                    name="descricao"
                    type="text"
                    placeholder="Digite a descrição"
                    values={values.descricao}
                  />
                  <CampoFormulario
                    id="preco"
                    label="Preço"
                    name="preco"
                    type="number"
                    placeholder="Digite o preço"
                    values={values.preco}
                  />
                  <CampoFormulario
                    id="estoque"
                    label="Estoque"
                    name="estoque"
                    type="number"
                    placeholder="Digite o estoque"
                    values={values.estoque}
                  />
                  <CampoFormulario
                    id="categoria"
                    label="Categoria"
                    name="categoria"
                    type="text"
                    placeholder="Digite a categoria"
                    values={values.categoria}
                  />
                  <CampoFormulario
                    id="marca"
                    label="Marca"
                    name="marca"
                    type="text"
                    placeholder="Digite a marca"
                    values={values.marca}
                  />
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
