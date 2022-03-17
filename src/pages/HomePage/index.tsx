import { Container, Grid } from "@mui/material";
import { BotaoLink } from "../../components/BotaoLink";

export function HomePage() {
  return (
    <Container maxWidth="xs">
      <Grid md={12}>
        <h1>HomePage</h1>
      </Grid>
      <Grid container md={12} spacing={2} >
        <Grid md={12} xs={12} item container>
          <Grid md={12} xs={12} item>
            <h2>Produtos</h2>
          </Grid>
          <Grid md={4} xs={4} item>
            <BotaoLink to="/produtos" label="Lista"/>
          </Grid>
          <Grid md={4} xs={4} item>
            <BotaoLink to="/produtos/cadastro" label="Cadastro"/>
          </Grid>
          <Grid md={4} xs={4} item>
            <BotaoLink to="/produtos/1/edicao" label="Editar"/>
          </Grid>
        </Grid>
        <Grid md={12} xs={12} item container>
          <Grid md={12} xs={12} item>
            <h2>Marcas</h2>
          </Grid>
          <Grid md={4} xs={4} item>
            <BotaoLink to="/marcas" label="Lista"/>
          </Grid>
          <Grid md={4} xs={4} item>
            <BotaoLink to="/marcas/cadastro" label="Cadastro"/>
          </Grid>
          <Grid md={4} xs={4} item>
            <BotaoLink to="/marcas/1/edicao" label="Editar"/>
          </Grid>
        </Grid>
        <Grid md={12} xs={12} item container>
          <Grid md={12} xs={12} item>
            <h2>Categorias</h2>
          </Grid>
          <Grid md={4} xs={4} item>
            <BotaoLink to="/categorias" label="Lista"/>
          </Grid>
          <Grid md={4} xs={4} item>
            <BotaoLink to="/categorias/cadastro" label="Cadastro"/>
          </Grid>
          <Grid md={4} xs={4} item>
            <BotaoLink to="/categorias/1/edicao" label="Editar"/>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

