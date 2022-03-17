import { Container, Grid } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import { api } from "../../../utils/api";

export interface CategoriaDataTypes {
  id: string;
  nome: string;
  descricao: string;
}

export function ListaCategorias() {
  const [data, setData] = useState<CategoriaDataTypes[]>([]);

  useEffect(() => {
    api.get('/categorias')
      .then((result) => {
        let resultado = result.data.map((item: Categoria) => {
          return {
            id: item.uuid,
            nome: item.nome,
            descricao: item.descricao
          }; 
        });
        setData(resultado)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  const columns: GridColDef[] = [
    { field: 'nome', headerName: 'Nome', width: 200 },
    { field: 'descricao', headerName: 'Descrição', width: 200 }
  ];

  return (
    <Container maxWidth="lg">
      <Grid md={12}>
        <h1>Lista de categorias</h1>
      </Grid>
      <Grid md={12}>
        <div style={{ height: 300, width: '100%' }}>
          <DataGrid
            components={{ Toolbar: GridToolbar }}
            rows={data}
            columns={columns}
          />
        </div>
      </Grid>
    </Container>
  );
}
