import { Button, ButtonGroup, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <Container maxWidth="xs">
      <Grid md={12}>
        <h1 className="">HomePage</h1>
      </Grid>
      <Grid container md={12} spacing={2} >
        <Grid md={12} xs={12} item display="flex" flexDirection="column">
          <h2>Produtos</h2>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button type="button">
              <Link
                to="/produtos"
                style={{ textDecoration: 'none', color: 'white' }}
              >Lista</Link>
            </Button>
            <Button type="button">
              <Link
                to="/produtos/cadastro"
                style={{ textDecoration: 'none', color: 'white' }}
              >Cadastro</Link>
            </Button>
            <Button type="button">
              <Link
                to="/produtos/1/cadastro"
                style={{ textDecoration: 'none', color: 'white' }}
              >Editar</Link>
            </Button>
          </ButtonGroup>
        </Grid>

        <Grid md={12} xs={12} item display="flex" flexDirection="column">
          <h2>Marcas</h2>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button type="button">
              <Link
                to="/marcas"
                style={{ textDecoration: 'none', color: 'white' }}
              >Lista</Link>
            </Button>
            <Button type="button">
              <Link
                to="/marcas/cadastro"
                style={{ textDecoration: 'none', color: 'white' }}
              >Cadastro</Link>
            </Button>
            <Button type="button">
              <Link
                to="/marcas/1/cadastro"
                style={{ textDecoration: 'none', color: 'white' }}
              >Editar</Link>
            </Button>
          </ButtonGroup>
        </Grid>

        <Grid md={12} xs={12} item display="flex" flexDirection="column">
          <h2>Categorias</h2>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button type="button">
              <Link
                to="/categorias"
                style={{ textDecoration: 'none', color: 'white' }}
              >Lista</Link>
            </Button>
            <Button type="button">
              <Link
                to="/categorias/cadastro"
                style={{ textDecoration: 'none', color: 'white' }}
              >Cadastro</Link>
            </Button>
            <Button type="button">
              <Link
                to="/categorias/1/cadastro"
                style={{ textDecoration: 'none', color: 'white' }}
              >Editar</Link>
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Container>
  );
}
