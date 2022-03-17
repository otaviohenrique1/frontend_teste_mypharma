import { Container, Grid } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import { api } from "../../../utils/api";

export interface MarcaDataTypes {
  id: string;
  nome: string;
}

export function ListaMarcas() {
  const [data, setData] = useState<MarcaDataTypes[]>([]);

  useEffect(() => {
    api.get('/marcas')
      .then((result) => {
        let resultado = result.data.map((item: Marca) => {
          return {
            id: item.uuid,
            nome: item.nome,
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
  ];

  return (
    <Container maxWidth="lg">
      <Grid md={12}>
        <h1>Lista de marcas</h1>
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
