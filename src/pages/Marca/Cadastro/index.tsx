import { Container, Grid } from "@mui/material";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { BotoesFormulario } from "../../../components/BotoesFormulario";
import { CampoFormulario } from "../../../components/Campos";
import { api } from "../../../utils/api";
import { v4 } from "uuid";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const SwalModal = withReactContent(Swal);

export const initialValues: MarcaTypes = {
  nome: ""
};

export const validationSchema = Yup.object().shape({
  nome: Yup.string().required('Campo vazio'),
});

export function CadastroMarca() {
  async function onSubmit(values: MarcaTypes, helpers: FormikHelpers<MarcaTypes>) {
    await api.post('/categorias', {
      uuid: v4().toString(),
      nome: values.nome,
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
                  <CampoFormulario
                    id="nome"
                    label="Nome"
                    name="nome"
                    type="text"
                    placeholder="Digite o nome da marca"
                    values={values.nome}
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
