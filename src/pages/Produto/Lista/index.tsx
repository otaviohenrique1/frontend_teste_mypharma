import { Container, Grid } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import { api } from "../../../utils/api";

interface DataTypes {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  estoque: number;
  categoria: string;
  marca: string;
}

export function ListaProduto() {
  const [data, setData] = useState<DataTypes[]>([]);

  useEffect(() => {
    api.get('/produtos')
      .then((result) => {
        let resultado = result.data.map((item: Produto) => {
          return {
            id: item.uuid,
            nome: item.nome,
            descricao: item.descricao,
            preco: item.preco,
            estoque: item.estoque,
            categoria: item.categoria,
            marca: item.marca
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
    { field: 'descricao', headerName: 'Descrição', width: 200 },
    { field: 'preco', headerName: 'Preço', width: 200 },
    { field: 'estoque', headerName: 'Estoque', width: 200 },
    { field: 'categoria', headerName: 'Categoria', width: 200 },
    { field: 'marca', headerName: 'Marca', width: 200 }
  ];

  return (
    <Container maxWidth="lg">
      <Grid md={12}>
        <h1>Lista de produtos</h1>
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
