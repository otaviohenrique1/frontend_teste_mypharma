import { Container, Grid } from "@mui/material";

export function Pagina404() {
  return (
    <Container maxWidth="xs">
      <Grid md={12} xs={12} container display="flex" flexDirection="column" spacing={2} paddingTop={10}>
        <Grid md={12} xs={12} item display="flex" justifyContent="center">
          <h1>Erro 404</h1>
        </Grid>
        <Grid md={12} xs={12} item display="flex" justifyContent="center">
          <h2>Pagina nao encontrada</h2>
        </Grid>
      </Grid>
    </Container>
  );
}