import { Container, Grid } from "@mui/material";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { BotoesFormulario } from "../../../components/BotoesFormulario";
import { CampoFormulario } from "../../../components/Campos";
import { api } from "../../../utils/api";
import { v4 } from "uuid";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useEffect, useState } from "react";
import { MarcaDataTypes } from "../../Marca/Lista";
import { CategoriaDataTypes } from "../../Categoria/Lista";

const SwalModal = withReactContent(Swal);

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
  const [dataMarca, setDataMarca] = useState<MarcaDataTypes[]>([]);
  const [dataCategoria, setDataCategoria] = useState<CategoriaDataTypes[]>([]);

  useEffect(() => {
    api.get('/marcas')
      .then((result) => {
        setDataMarca(result.data)
      })
      .catch((error) => {
        console.error(error);
      });
    api.get('/categoria')
      .then((result) => {
        setDataCategoria(result.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  async function onSubmit(values: ProdutoTypes, helpers: FormikHelpers<ProdutoTypes>) {
    await api.post('/categorias', {
      uuid: v4().toString(),
      nome: values.nome,
      descricao: values.descricao,
      preco: values.preco,
      estoque: values.estoque,
      categoria: values.categoria,
      marca: values.marca,
    })
      .then(() => {
        SwalModal.fire({
          icon: 'success',
          title: "Cadastro realizado com sucesso!",
          confirmButtonText: 'Fechar',
        });
      })
      .catch((error) => {
        console.error(error);
      });

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
                  <BotoesFormulario
                    botao_cadastrar_label="Salvar"
                    botao_limpar_label="Limpar"
                    botao_link_label="Voltar"
                    to="/home-page"
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
